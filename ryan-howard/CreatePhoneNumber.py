def create_phone_number(n):
    phone_number = "({}{}{}) {}{}{}-{}{}{}{}".format(*n)
    return phone_number


#INIT
#Make placeholders for each number in a string
# The *n is called unpacking where it takes a list and treats thnem as separate values
# format inserts each individual unpacked value into each placeholder
