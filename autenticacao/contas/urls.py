from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('registro/', views.registro_view, name='registro'),
    path('favoritos/', views.favoritos_view, name='favoritos'),
    path('carrinho/', views.carrinho_view, name='carrinho'),
    path('produtos/', views.produtos_view, name='produtos'),
    path('settings/', views.settings_view, name='settings'),
    path('admi/', views.admi_view, name='admi'),
    path('mudarsenha/', auth_views.PasswordChangeView.as_view(template_name='login/mudarsenha.html'), name='mudarsenha'),
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='login/resetasenha.html'), name='password_reset'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='login/password_reset_form.html'), name='password_reset_confirm'),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name='login/password_reset_done.html'), name='password_reset_complete'),
    path('', views.home_view, name='home'),
]
