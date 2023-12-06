from audioop import reverse
from django.shortcuts import redirect, render

# Create your views here.


def appointment(request):
    context = {}
    return (render(request, "app/appointment.html", context))
