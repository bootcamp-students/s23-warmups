def calculate(s):
    # replace everything with math operators or integers
    # take numbers and add them bad boys together using sum
    # loop through s
    # replace plus with +, minus with a -
    # replace numbers in string swith its integer value
    # use eval to evaluate them not as strings
    # return s
    s = s.replace("plus","+").replace("minus", "-")
    result = str(eval(s))
    return result
