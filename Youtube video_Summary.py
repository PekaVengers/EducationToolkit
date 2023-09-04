#!/usr/bin/env python
# coding: utf-8

# In[1]:


get_ipython().system('pip install youtube-transcript-api')


# In[2]:


from youtube_transcript_api import YouTubeTranscriptApi

def get_youtube_transcript(video_id):
    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        return transcript
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None

if __name__ == '__main__':
    video_id = 'Ae4MadKPJC0'  # Replace with the YouTube video ID
    transcript = get_youtube_transcript(video_id)

    if transcript:
        print("Transcript:")
        for entry in transcript:
            print(entry['text'])
    else:
        print("Transcript not available.")


# In[ ]:




