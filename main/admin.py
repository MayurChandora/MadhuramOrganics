from django.contrib import admin
from .models import Product, GalleryImage, ProductImage
# from django.contrib.auth.models import Group
# admin.site.unregister(Group)


admin.site.site_header = "MadhuramOrganics Dashboard"
admin.site.site_title = "MadhuramOrganics Admin"
admin.site.index_title = "Manage Products & Gallery"


class ProductImageInline(admin.StackedInline):
    model = ProductImage
    extra = 2


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "price", "in_stock", "created_at")
    list_filter = ("category", "in_stock")
    search_fields = ("name",)
    ordering = ("-created_at",)
    fieldsets = (
        ("Basic Information", {
            "fields": ("name", "category", "price", "in_stock")
        }),
        ("Product Details", {
            "fields": ("description",)
        }),
        ("Main Image", {
            "fields": ("image",)
        }),
    )
    inlines = [ProductImageInline]  #THIS ENABLES EXTRA IMAGES

@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ("product", "image", "created_at")

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "created_at")
    list_filter = ("category",)
    search_fields = ("title",)
    ordering = ("-created_at",)
