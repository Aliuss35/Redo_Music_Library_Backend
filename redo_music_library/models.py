from django.db import models

# title - CharField  
# artist - CharField  
# album - CharField  
# release_date - DateField  
# genre - CharField  

# Create your models here.
class Song(models.Model):
  title = models.CharField(max_length=255)
  artist = models.CharField(max_length=255)
  album = models.CharField(max_length=255)
  release_date = models.DateField()
  genre = models.CharField(max_length=255)