from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from redo_music_library.serializers import SongSerializer
from .models import Song
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
@api_view(['GET'])
def songs_list(request):
  songs= Song.objects.all()
  serializer=SongSerializer(songs, many=True)
  
  return Response(serializer.data)  
# Create your views here.
@api_view(['POST'])
def post_songs(request):
  serializer=SongSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status.HTTP_201_CREATED)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def update_delete_get_song(request, song_id):
  song = get_object_or_404(Song, pk=song_id)
  if request.method == 'PUT':
    serializer=SongSerializer(song, data=request.data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return Response(serializer.data, status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif request.method == 'GET':
    serializer=SongSerializer(song)
    return Response(serializer.data, status=status.HTTP_200_OK)
  elif request.method == 'DELETE':
    song.delete()
    return(Response(status=status.HTTP_404_NOT_FOUND))
