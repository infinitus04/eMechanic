from django.contrib import admin
from .models import Product
# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    product_display = ('name', 'dis', 'price', 'uniqueID', 'img')
    
admin.site.register(Product,ProductAdmin)