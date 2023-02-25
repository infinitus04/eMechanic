from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "index.html")

def about(request):
    return render(request, "indexAbout.html")

def contact(request):
    return render(request, "indexContact.html")

def shop(request):
    return render(request, "indexShop.html")

def service(request):
    return render(request, "indexService.html")
