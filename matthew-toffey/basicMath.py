def calculate(s):
    new = s.replace("plus", "+").replace("minus", "-")
    answer = eval(new)
    strAnswer = str(answer)
    return strAnswer

#BEGIN
#given strin to modify
#return new string
#preform addition and subtraction on given string
#END
