from rest_framework import serializers
from .models import User, Car, CarSell


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'


class CarSellSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarSell
        fields = '__all__'
