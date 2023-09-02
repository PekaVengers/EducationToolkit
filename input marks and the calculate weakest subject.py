#!/usr/bin/env python
# coding: utf-8

# In[ ]:


# Function to calculate the weakest subject
def find_weakest_subject(marks):
    # Calculate the average marks for each subject
    subject_avg_marks = {}
    for subject, (half_term, final_term) in marks.items():
        avg_mark = (half_term + final_term) / 2
        subject_avg_marks[subject] = avg_mark

    # Find the subject with the lowest average marks
    weakest_subject = min(subject_avg_marks, key=subject_avg_marks.get)

    return weakest_subject

# Input marks for Physics, Chemistry, and Mathematics
marks = {}

for subject in ["Physics", "Chemistry", "Mathematics"]:
    half_term_mark = float(input(f"Enter the mid-term marks for {subject}: "))
    final_term_mark = float(input(f"Enter the final-term marks for {subject}: "))
    marks[subject] = (half_term_mark, final_term_mark)

weakest_subject = find_weakest_subject(marks)
print(f"The weakest subject of student is: {weakest_subject}")


# In[ ]:




