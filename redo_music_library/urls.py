from django.urls import path
from . import views

urlpatterns = [
  path('all/', views.songs_list),
  path('post-song/', views.post_songs),
  path('update/<int:song_id>/', views.update_delete_get_song),
  path('delete/<int:song_id>/', views.update_delete_get_song),
  path('get/<int:song_id>/', views.update_delete_get_song)
]