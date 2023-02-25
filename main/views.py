from django.shortcuts import render, HttpResponse
from .models import Product, Service

# Create your views here.
def home(request):
    try:
        latestProducts = Product.objects.all().order_by('-id')[:5]
        # products = Product.objects.all()
        # print(len(products))
        allData = []
        for p in latestProducts:
            k = {}
            p.dis = p.dis.replace("\n", "<br>") 
            k["product"] = p
            k["link"] = linkReplace(p.name)
            allData.append(k)
            # print(k["link"])
        data = {
            
            "allData" : allData
        }
    except:
        return HttpResponse("No product availiable")
        # return HttpResponse("No product currently availiable")
    
    return render(request, "index.html",data)

def shop(request):
    try:
        products = Product.objects.all()
        # print(len(products))
        allData = []
        for p in products:
            k = {}
            p.dis = p.dis.replace("\n", "<br>") 
            k["product"] = p
            k["link"] = linkReplace(p.name)
            allData.append(k)
            # print(k["link"])
        data = {
            
            "allData" : allData
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
        allData =[]
        for s in services:
            k = {}
            s.dis = s.dis.replace("\n", "<br>") 
            k["service"] = s
            k["link"] = linkReplace(s.name)
            allData.append(k)
            # print(k["link"])
        data = {
            
            "allData" : allData
        }
    except:
        return HttpResponse("No product currently availiable")
    return render(request, "indexService.html",data)

def linkReplace(link):
    replaced = link.replace(" ","%20")
    replaced = "https://wa.me/9021043882?text=Enquiry%20for%0a"+replaced.replace("\n","%0a")
    
    return replaced
