from django.db import models

# Create your models here.

class Contacto(models.Model):
    Id = models.AutoField(primary_key=true)
    Nombre = models.Charfield(max_length=20)
    Apellido = models.Charfield(max_length=20)
    Compañia =  models.Charfield(max_length=100)
    Cargo =  models.Charfield(max_length=20)
    Email =  models.Charfield(max_length=50)
    Celular =  models.Charfield(max_length=10, min_length = 10)
    Direccion =  models.Charfield(max_length= 100)

class Empresa(models.Model):
    Id = models.AutoField(primary_key=true)
    Nombre = models.CharField(max_length=50)
    Direccion = models.CharField(max_length=50)
    NIT = models.CharField(max_length=50)