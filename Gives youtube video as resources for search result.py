#!/usr/bin/env python
# coding: utf-8

# In[4]:


import requests

# Replace with your actual YouTube Data API key and endpoint
api_key = 'AIzaSyBhTt5SFFN7MgyI-Qt2t8XtX2AHQ0mi_wc'
api_endpoint = 'https://www.googleapis.com/youtube/v3/'

# Get user input for the search query and the number of results
search_query = input("Enter your search query: ")
max_results = int(input("Enter the maximum number of results to retrieve: "))

# Define parameters for your YouTube API request
params = {
    'part': 'snippet',  # Specify the data you want to retrieve
    'q': search_query,  # User-provided search query
    'maxResults': max_results,  # User-provided maximum number of results
    'key': api_key,  # Include your API key
}

try:
    response = requests.get(f'{api_endpoint}search', params=params)

    if response.status_code == 200:
        data = response.json()
        if 'items' in data:
            print("Search Results:")
            for item in data['items']:
                if item['id']['kind'] == 'youtube#video':
                    video_title = item['snippet']['title']
                    video_id = item['id']['videoId']
                    video_url = f"https://www.youtube.com/watch?v={video_id}"
                    print(f"Title: {video_title}")
                    print(f"Video URL: {video_url}")
                else:
                    print(f"Skipping non-video item: {item['snippet']['title']}")
        else:
            print("No results found.")
    else:
        print(f"API request failed with status code {response.status_code}")

except Exception as e:
    print(f"An error occurred: {str(e)}")


# In[ ]:




