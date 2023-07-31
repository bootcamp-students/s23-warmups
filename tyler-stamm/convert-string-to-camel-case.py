# def to_camel_case(text):
#     # replace - or _ with space
#     # every letter that immediately follows a - or _ should be capitalized
# # loop through this bad boy
#     if not text:
#         return ""
#     word = int(text)
#     for i in word:
#         if word[i] == "-" or "_":
#             word.replace == " "
#             word[i + 1] == word.upper()
#     return word

def to_camel_case(text):
    words = text.replace('-', '_').split('_')
    return words[0] + ''.join(word.capitalize() for word in words[1:])
