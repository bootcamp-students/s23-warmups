def to_camel_case(text):
    words = text.replace('-', '_').split('_')
    return words[0] + ''.join(word.capitalize() for word in words[1:])


#get rid of dashes and underscores
#capitalize first Letter of stealth and warrior
#split each word, capitalize the first letter of each one, and join them together
