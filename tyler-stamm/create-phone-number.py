def create_phone_number(n):
    # set format to (xxx) xxx-xxxx
    # loop through the string
    # use .replace to replace x with that specific iteration
    format = "(xxx) xxx-xxxx"
    for num in n:
        format = format.replace("x", str(num), 1)
    return format
