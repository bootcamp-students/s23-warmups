# Return: A string that removes dashes and underscores and the subsequent words in the string as capitals.
# Parameter: A string 
# Store result in answer variable 
# Split the string by their dashes or underscores 
# Remove the dashes and underscores
# Cptitalize the subsequent words. 
# Return answer 

def to_camel_case(text):
    answer = text.replace("-", " ").replace("_", " ")
    answer = answer.split()
    if len(text) == 0:
        return text
    return answer[0] + ''.join(i.capitalize() for i in answer[1:])
