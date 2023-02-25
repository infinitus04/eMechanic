from django.shortcuts import render, HttpResponse
from .models import Product, Service

# Create your views here.
def home(request):
    try:
        latestProduct = Product.objects.all().order_by('-id')[:5]
        
        data = {
            "products" : latestProduct
        }
    except:
        return HttpResponse("No product availiable")
        # return HttpResponse("No product currently availiable")
    
    return render(request, "index.html",data)

def shop(request):
    try:
        products = Product.objects.all()
        # print(len(products))
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
    try:
        services = Service.objects.all()
        for s in services:
            s.dis = s.dis.replace("\n", "<br>")
            
        data = {
            "services" : services
        }
    except:
        return HttpResponse("No product currently availiable")
    return render(request, "indexService.html",data)
