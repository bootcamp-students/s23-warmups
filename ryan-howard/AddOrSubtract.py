def calculate(s):
    s = s.replace("plus","+").replace("minus", "-")
    result = str(eval(s))
    return result


#replace "plus" with + and "minus"
#use str and sum and integer to convert the remaining to integers, add them, and convert them back to a string
