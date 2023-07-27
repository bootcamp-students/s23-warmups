def create_phone_number(n):
    # {} is a placeholder waiting to be replaced
    # the '*' before the n seperates the list into separate values (unpacking)
    # all the numbers take the place of the braces and outputs the phone number
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)
