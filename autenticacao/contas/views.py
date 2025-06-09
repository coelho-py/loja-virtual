from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        senha = request.POST.get('senha')
        user = authenticate(request, username=username, password=senha)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Usuário ou senha inválidos.', extra_tags='login')
    return render(request, 'login/login.html')

def registro_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        confirmar_senha = request.POST.get('confirmar_senha')

        if senha != confirmar_senha:
            messages.error(request, 'As senhas não coincidem.', extra_tags='registro')
            return redirect('registro')

        if User.objects.filter(username=username).exists():
            messages.error(request, 'Nome de usuário já existe.', extra_tags='registro')
            return redirect('registro')

        if User.objects.filter(email=email).exists():
            messages.error(request, 'E-mail já está em uso.', extra_tags='registro')
            return redirect('registro')

        user = User.objects.create_user(username=username, email=email, password=senha)
        user.save()
        messages.success(request, 'Conta criada com sucesso! Faça login.', extra_tags='registro')
        return redirect('login')

    return render(request, 'login/registro.html')

def logout_view(request):
    logout(request)
    return redirect('login')

def home_view(request):
    return render(request, 'login/home.html')

def favoritos_view(request):
    return render(request, 'login/favoritos.html', {})

def carrinho_view(request):
    return render(request, 'login/carrinho.html', {})

def produtos_view(request):
    return render(request, 'login/produtos.html', {})

