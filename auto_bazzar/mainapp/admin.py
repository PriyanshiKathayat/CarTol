from django.contrib import admin
from .models import User, Car, CarSell

admin.site.register(User)
admin.site.register(Car)
admin.site.register(CarSell)