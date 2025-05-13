from django.urls import path
from . import views

urlpatterns = [
    # Auth & User
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('forgot-password/', views.forgot_password, name='forgot_password'),
    path('verify-otp/', views.verify_otp, name='verify_otp'),
    path('reset-password/', views.reset_password, name='reset_password'),

    # Car APIs
    path('cars/', views.get_car_list, name='get_car_list'),
    path('cars/create/', views.create_car, name='create_car'),
    path('cars/<int:pk>/', views.get_car_detail, name='get_car_detail'),
    path('cars/<int:pk>/update/', views.update_car, name='update_car'),
    path('cars/<int:pk>/delete/', views.delete_car, name='delete_car'),
    path('cars/names/', views.car_names, name='car_names'),
    path('cars/name/<str:name>/', views.car_detail_by_name, name='car_detail_by_name'),

    # Sell APIs (Authenticated)
    path('sell/', views.get_sell_list, name='get_sell_list'),
    path('sell/create/', views.create_sell_listing, name='create_sell_listing'),
    path('sell/<int:pk>/', views.get_sell_detail, name='get_sell_detail'),
    path('sell/<int:pk>/update/', views.update_sell_detail, name='update_sell_detail'),
    path('sell/<int:pk>/delete/', views.delete_sell_detail, name='delete_sell_detail'),
]
