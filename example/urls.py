from django.urls import include, path
from . import views

urlpatterns = [
    path('home/', views.Example.as_view(), name='example')
]
