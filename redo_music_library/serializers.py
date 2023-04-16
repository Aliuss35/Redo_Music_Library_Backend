from dataclasses import fields
from .models import Song
from rest_framework import serializers

class SongSerializer(serializers.ModelSerializer):
  class Meta:
    model = Song
    fields = ['id', 'title', 'artist', 'album', 'release_date', 'genre']
