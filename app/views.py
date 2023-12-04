from django.shortcuts import render

# Create your views here.


def appointment(request):
    context = {}
    return (render(request, "app/appointment.html", context))
