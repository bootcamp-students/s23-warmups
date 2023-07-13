# begin
# given string
# perform addition and subtraction on the string
# return a string
# the input will not be empty
# end


def calculate(s):
    new = s.replace("plus", "+").replace("minus", "-")
    answer = eval(new)
    strAnswer = str(answer)
    return strAnswer