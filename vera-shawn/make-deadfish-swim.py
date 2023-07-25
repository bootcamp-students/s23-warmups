# BEGIN
# INPUT - string
# RETURN a list
# END

def parse(data):
    if data == None: # if statement if input is not valid
        return "Not valid"
    deadfish = []
    answer = 0
    for letter in data: # if statement to associate each letter to an operation
        if letter == "o":
            deadfish.append(answer)
        if letter == "i":
            answer += 1
        if letter == "d":
            answer -= 1
        if letter == "s":
            answer = answer ** 2
    return deadfish