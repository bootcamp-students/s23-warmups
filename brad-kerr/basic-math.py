# Return: A string that is an integer of the answer in the equation 
# Parameter: A string
# Replace the plus with + and minus -, store the answer in the variable 
# Return the variable as a string

def calculate(s):
    answer = s.replace("plus", "+").replace("minus", "-")
    result = str(eval(answer))
    return result
