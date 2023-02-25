from django.contrib import admin
from .models import Product, Service
# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    product_display = ('name', 'dis', 'price', 'uniqueID', 'img')
    
admin.site.register(Product,ProductAdmin)

class ServiceAdmin(admin.ModelAdmin):
    service_display = ('name', 'dis', 'minPrice', 'maxPrice', )
    
admin.site.register(Service,ServiceAdmin)