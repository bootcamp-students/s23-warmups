def parse(data):
    #sets all the letters to lower case
    string_letters = data.lower()
    #sets the starting number to 0 
    string_number = 0
    #creates empty array
    arr = []
    #loops through all the letters in the string with a for loop
    for element in string_letters:
        #checks if the letter is equal to i 
        if element == 'i':
            #increases string number by 1
            string_number = string_number + 1
        #checks if the letter is equal to d
        elif element == 'd':
            #decreases number by 1
            string_number = string_number - 1
        #checks if the letter is equal to s
        elif element == 's':
            #squares the string number var
            string_number = string_number * string_number
        #checks if the letter is equal to o
        elif element == 'o':
            #appends the number to the array
            arr.append(string_number)
    return arr

"""
PSEUDOCODE
take in a string (data)
make empty array
make var that is equal to 0 
itterate through each of the letters in data
check what the letter is
if it is i, d, s, o then have it carry out what it needs to do
return the array with the number value
"""
