from django.urls import path
from app import views

urlpatterns = [
    path('', views.appointment, name="appointment_page"),
]