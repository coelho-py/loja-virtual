from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('registro/', views.registro_view, name='registro'),
    path('favoritos/', views.favoritos_view, name='favoritos'),
    path('carrinho/', views.carrinho_view, name='carrinho'),
    path('', views.home_view, name='home'),
]
