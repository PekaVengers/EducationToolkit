from django.urls import path
from . import views

urlpatterns = [
  path('', views.index, name='index'),
  path('pdf-summary/', views.PDFSummary.as_view(), name='pdf-summary'),
  path('ask-question/', views.AnswerQuestions.as_view(), name='answer-questions'),
  path('video-summary/', views.VideoSummary.as_view(), name='video-summary'),
]