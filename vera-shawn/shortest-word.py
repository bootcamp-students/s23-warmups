# begin
# given string
# return length of shortest word in string
# end

def find_short(s):
    # your code here
    words = s.split()
    words.sort(key=len)
    return len(words[0]) # l: shortest word length