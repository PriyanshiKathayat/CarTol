from django.conf import settings
from django.contrib.auth.hashers import make_password, check_password
from django.core.cache import cache  # Use cache for OTP storage
from django.shortcuts import get_object_or_404
from django.utils.crypto import get_random_string
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.exceptions import ValidationError

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .models import User, Car, CarSell
from .serializers import UserSerializer, CarSerializer, CarSellSerializer
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

# Email Sender
def send_email_sync(subject, template_name, context, recipient_email):
    try:
        html_content = render_to_string(template_name, context)
        text_content = strip_tags(html_content)
        email = EmailMultiAlternatives(
            subject,
            text_content,
            'AutoBazaar <noreply@autobazzar.in>',
            [recipient_email],
        )

        email.attach_alternative(html_content, "text/html")
        email.send()
    except Exception as e:
        print(f"Error sending email to {recipient_email}: {e}")
        raise ValidationError("There was an error sending the email. Please try again.")

# In-memory OTP store - This should be replaced by cache in production
OTP_EXPIRATION_TIME = 300  # OTP expiration in seconds (5 minutes)

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    data = request.data

    if User.objects.filter(email=data.get('email')).exists():
        return Response({'msg': 'Email already registered.'}, status=status.HTTP_400_BAD_REQUEST)

    data['password'] = make_password(data.get('password'))
    serializer = UserSerializer(data=data)

    if serializer.is_valid():
        try:
            user = serializer.save()

            # Send welcome email
            send_email_sync(
                subject='Welcome to AutoBazaar!',
                template_name='emails/register_success.html', 
                context={'full_name': data.get('full_name', 'User')}, 
                recipient_email=data.get('email')
            )

            return Response({'msg': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        except ValidationError as e:
            return Response({'msg': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(f"Error during signup: {e}")
            return Response({'msg': 'An error occurred. Please try again.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = User.objects.get(email=email)
        if user.is_active and check_password(password, user.password):  # Check if user is active
            refresh = RefreshToken.for_user(user)
            serializer = UserSerializer(user)

            return Response({
                'msg': 'Login successful',
                'access': str(refresh.access_token),
                'refresh': str(refresh),
                'user': serializer.data
            }, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid password or inactive user'}, status=status.HTTP_401_UNAUTHORIZED)

    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_car_list(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def create_car(request):
    serializer = CarSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'msg': 'Car created'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_car_detail(request, pk):
    car = get_object_or_404(Car, pk=pk)
    serializer = CarSerializer(car)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([AllowAny])
def update_car(request, pk):
    car = get_object_or_404(Car, pk=pk)
    serializer = CarSerializer(car, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({'msg': 'Car updated'})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([AllowAny])
def delete_car(request, pk):
    car = get_object_or_404(Car, pk=pk)
    car.delete()
    return Response({'msg': 'Car deleted'})

@api_view(['GET'])
@permission_classes([AllowAny])
def car_names(request):
    names = Car.objects.values_list('name', flat=True)
    return Response(list(names))

@api_view(['GET'])
@permission_classes([AllowAny])
def car_detail_by_name(request, name):
    try:
        car = Car.objects.get(name=name)
        serializer = CarSerializer(car)
        return Response(serializer.data)
    except Car.DoesNotExist:
        return Response({'error': 'Car not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_sell_list(request):
    listings = CarSell.objects.filter(user=request.user)
    serializer = CarSellSerializer(listings, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_sell_listing(request):
    data = request.data.copy()
    data['user'] = request.user.id
    serializer = CarSellSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        send_email_sync(
            subject='Your Car Has Been Listed!',
            template_name='emails/car_sell_success.html',
            context={'full_name': request.user.full_name, 'car_model': data.get('car_model', 'your car')},
            recipient_email=request.user.email
        )
        return Response({'msg': 'Car listed for selling'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_sell_detail(request, pk):
    car = get_object_or_404(CarSell, pk=pk, user=request.user)
    serializer = CarSellSerializer(car)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_sell_detail(request, pk):
    car = get_object_or_404(CarSell, pk=pk, user=request.user)
    serializer = CarSellSerializer(car, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        send_email_sync(
            subject='Car Listing Updated',
            template_name='emails/car_sell_updated.html',
            context={'full_name': request.user.full_name, 'car_model': request.data.get('car_model', car.car_model)},
            recipient_email=request.user.email
        )
        return Response({'msg': 'Car Sell updated'})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_sell_detail(request, pk):
    car = get_object_or_404(CarSell, pk=pk, user=request.user)
    car_model = car.car_model
    car.delete()

    send_email_sync(
        subject='Car Listing Deleted',
        template_name='emails/car_sell_deleted.html',
        context={'full_name': request.user.full_name, 'car_model': car_model},
        recipient_email=request.user.email
    )
    return Response({'msg': 'Car Sell deleted'})

@api_view(['POST'])
@permission_classes([AllowAny])
def forgot_password(request):
    email = request.data.get('email')
    try:
        user = User.objects.get(email=email)
        otp = get_random_string(length=6, allowed_chars='1234567890')
        cache.set(f"otp_{email}", otp, OTP_EXPIRATION_TIME)  # Store OTP in cache with expiration

        send_email_sync(
            subject='OTP for Password Reset - AutoBazaar',
            template_name='emails/otp_email.html', 
            context={'full_name': user.full_name, 'otp': otp},
            recipient_email=email
        )

        return Response({'msg': 'OTP sent to email'})
    except User.DoesNotExist:
        return Response({'error': 'Email not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes([AllowAny])
def verify_otp(request):
    email = request.data.get('email')
    otp = request.data.get('otp')

    stored_otp = cache.get(f"otp_{email}")
    if stored_otp == otp:
        return Response({'msg': 'OTP verified'})
    return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def reset_password(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = User.objects.get(email=email)
        user.password = make_password(password)
        user.save()

        cache.delete(f"otp_{email}")  # Clear OTP after successful reset

        send_email_sync(
            subject='Password Reset Successful',
            template_name='emails/password_updated.html',
            context={'full_name': user.full_name},
            recipient_email=email
        )

        return Response({'msg': 'Password reset successful'})
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
