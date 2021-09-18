from adminContactos.adminContactos.Modulos.contactosapp.models import Contacto, Empresa
from django.contrib import admin
from Modulos.contactosapp import *
# Register your models here.
admin.site.register(Contacto)
admin.site.register(Empresa)