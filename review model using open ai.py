#!/usr/bin/env python
# coding: utf-8

# In[1]:


get_ipython().system('pip install openai')


# In[2]:


import openai

# Replace with your GPT-3 API key
api_key = "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"

def evaluate_essay(essay):
    openai.api_key = api_key

    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=f"Check the following text for grammar errors and suggest corrections:\n\n{essay}",
        max_tokens=3000  # Adjust based on the length of the text
    )

    suggested_text = response.choices[0].text.strip()
    return suggested_text

# Prompt the user for an essay
review = input("Enter your essay/article/answer:\n")

# Evaluate the essay and get grammar suggestions
suggested_essay = evaluate_essay(review)

# Print the suggested essay
print("Here is the Suggested :")
print(suggested_essay)


# In[ ]:




