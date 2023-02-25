from django.shortcuts import render, HttpResponse
from .models import Product

# Create your views here.
def home(request):
    return render(request, "index.html")

def shop(request):
    try:
        products = Product.objects.all()
        data = {
            "products" : products
        }
    except:
        return HttpResponse("No product currently availiable")
    
    return render(request, "indexShop.html",data)


def about(request):
    return render(request, "indexAbout.html")

def contact(request):
    return render(request, "indexContact.html")


def service(request):
    return render(request, "indexService.html")
