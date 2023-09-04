#!/usr/bin/env python
# coding: utf-8

# In[6]:


get_ipython().system('pip install openai')


# In[8]:


import openai
api_key = "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"
openai.api_key = api_key
que=input("Please Write Your Question:")

response = openai.Completion.create(
    engine="text-davinci-002",
    prompt=que,
    max_tokens=2000  # Adjust this value to control the response length
)

# Extract the generated answer
ans = response.choices[0].text


print("Q:", que)
print("Ans:", ans)


# In[ ]:




