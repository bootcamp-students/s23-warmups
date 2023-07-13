def calculate(s):
    #finds "plus" and "minus" and replace them with "+" and "-"
    answer = s.replace("plus", "+").replace("minus", "-")
    #evals the answer and turns it into a whole number
    result = eval(answer)
    #turns the result into a string
    strResult = str(result)
    #returns the answer
    return strResult

"""
PSEUDOCODE
take in a string 
find the "plus" and "minus" in the string
replace the "plus" and "minus" with "+" and "-"
eval the new string into a whole number
turn the whole number into a string
return the answer
"""
