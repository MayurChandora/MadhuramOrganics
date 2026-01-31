from django.shortcuts import render
from .models import Product, GalleryImage
# Create your views here.
def home(request):
    return render(request, "home.html")

def about(request):
    return render(request, "about.html")

def contact(request):
    return render(request, "contact.html")

def products(request):
    products = Product.objects.prefetch_related("images").order_by("-created_at")
    return render(request, "products.html", {"products": products})

def gallery(request):
    gallery_images = GalleryImage.objects.all().order_by("-created_at")
    return render(request, "gallery.html", {"gallery_images": gallery_images})


def demo(request):
    return render(request, "demo.html")