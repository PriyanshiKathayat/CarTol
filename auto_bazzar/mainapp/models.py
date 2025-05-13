from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.validators import RegexValidator, MinValueValidator, MaxValueValidator


# --- Custom User Manager ---
class CustomUserManager(BaseUserManager):
    def create_user(self, email, full_name, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, full_name=full_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, full_name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('age', 21)
        extra_fields.setdefault('phone_number', '0000000000')
        extra_fields.setdefault('country', 'India')
        extra_fields.setdefault('state', 'Uttarakhand')
        extra_fields.setdefault('city', 'Bhimtal')
        return self.create_user(email, full_name, password, **extra_fields)


# --- User Model ---
class User(AbstractBaseUser, PermissionsMixin):
    full_name = models.CharField(max_length=100)
    age = models.PositiveIntegerField(validators=[MinValueValidator(18), MaxValueValidator(100)])
    email = models.EmailField(unique=True)
    phone_number = models.CharField(
        max_length=10,
        validators=[RegexValidator(regex=r'^\d{10}$', message='Enter a valid 10-digit number')]
    )
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name', 'age', 'phone_number', 'country', 'state', 'city']

    objects = CustomUserManager()

    def __str__(self):
        return self.full_name


class Car(models.Model):
    BRAND_CHOICES = [
        ('maruti_suzuki', 'Maruti Suzuki'),
        ('tata', 'Tata'),
        ('mahindra', 'Mahindra'),
        ('hyundai', 'Hyundai'),
    ]

    TYPE_CHOICES = [
        ('hatchback', 'Hatchback'),
        ('sedan', 'Sedan'),
        ('suv', 'SUV'),
        ('mpv', 'MPV'),
        ('off-roader', 'Off-Roader'),
        ('micro-suv', 'Micro-SUV'),
        ('cross-hatch', 'Cross-hatch'),
        ('compact-suv', 'Compact SUV'),
        ('compact-sedan', 'Compact Sedan'),
        ('electric-suv', 'Electric SUV'),
        ('coupe-suv', 'Coupe-SUV'),
        ('electric-hatch', 'Electric Hatch'),
        ('premium-suv', 'Premium SUV'),
        ('3-row-suv', '3-Row SUV'),
    ]

    FUEL_CHOICES = [
        ('petrol', 'Petrol'),
        ('petrol/cng', 'Petrol/CNG'),
        ('petrol/diesel', 'Petrol/Diesel'),
        ('petrol/hybrid', 'Petrol/Hybrid'),
        ('electric/petrol', 'Electric/Petrol'),
        ('diesel', 'Diesel'),
        ('electric', 'Electric'),
        ('hybrid', 'Hybrid'),
    ]

    brand = models.CharField(max_length=20, choices=BRAND_CHOICES)
    name = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    mileage = models.FloatField()
    safety = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    interior = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    car_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    fuel_type = models.CharField(max_length=20, choices=FUEL_CHOICES)
    image = models.ImageField(upload_to='car_images/')
    crash_test_video = models.URLField()

    def __str__(self):
        return f"{self.get_brand_display()} {self.name}"


class CarImage(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='car_images/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image for {self.car.name}"


# --- Car Sell Model ---
class CarSell(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    model_year = models.PositiveIntegerField()
    purchase_year = models.PositiveIntegerField()
    expected_price = models.PositiveIntegerField()
    car_image = models.ImageField(upload_to='sell_car_images/', blank=True, null=True)

    def __str__(self):
        return f"{self.car.name} by {self.user.full_name}"
