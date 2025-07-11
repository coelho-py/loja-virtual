from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('registro/', views.registro_view, name='registro'),
    path('pesquisa/', views.pesquisa_view, name='pesquisa'),
    path('carrinho/', views.pesquisa_view, name='carrinho'),
    path('', views.home_view, name='home'),
]
