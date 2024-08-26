from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class Example(TemplateView):
    template_name = "test.html"