def to_camel_case(text):
    #replaces '-' and '_' with ' '
    s = text.replace("-", " ").replace("_", " ")
    #splits the words apart
    s = s.split()
    #checks if the word is greater than 0
    if len(text) == 0:
        return text
    #joins the words together and capitalizes the first letter
    return s[0] + ''.join(i.capitalize() for i in s[1:])

"""
PSEUDOCODE
Take in a string
separate the string 
capitilize the first letter of each work except the first word
join the words together into one string with no spaces
return
"""
