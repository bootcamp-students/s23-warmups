 import re

def to_camel_case(text):
    words = re.split(r'[-_]', text)  # Split the input string by '-' or '_'
    camel_case_string = words[0] + ''.join(word.capitalize() for word in words[1:])  # Capitalize subsequent words
    return camel_case_string
