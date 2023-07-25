# START
# Four different commands
# i increments value by 1
# d decrements value by 1
# s squares the value
# o outputs the value into the return array
# anything else will continue onto through the string and not add anything to the list. 
# END

def parse(data):
    result = []
    current_value = 0
    for letter in data: 
        if letter == 'i':
            current_value = current_value + 1
        elif letter == 'd':
            current_value = current_value - 1
        elif letter == 's':
            current_value = current_value ** 2
        elif letter == 'o' : 
            result.append(current_value)
        else:
            current_value = current_value
    return result
