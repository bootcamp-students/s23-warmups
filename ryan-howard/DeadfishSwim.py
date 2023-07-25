def parse(data):
    string_letters = data
    string_number = 0
    arr = []
    for element in string_letters:
        if element == 'i':
            string_number = string_number + 1
        elif element == 'd':
            string_number = string_number - 1
        elif element == 's':
            string_number = string_number * string_number
        elif element == 'o':
            arr.append(string_number)
    return arr

#INIT
#else if to determine where the value is incremented, decremented, squared, or output
