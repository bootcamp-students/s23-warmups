def calculate(s):
    s = s.replace("plus", "+").replace("minus", "-")  # Replace 'plus' with '+' and 'minus' with '-'
    result = eval(s)  # Evaluate the modified string as a Python expression
    return str(result)  # Convert the result back to a string
