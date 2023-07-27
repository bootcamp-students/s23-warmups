# Return: the numbers in a phone number format
# Paramter: an array of 10 integers
# Break the array into three different strings based off the index slice needed
# Join them with the other symbols needed to display the phone number correctly

def create_phone_number(n):
    one = ''.join(map(str, n[:3]))
    two = ''.join(map(str, n[3:6]))
    three = ''.join(map(str, n[6:10]))

    return f'({one}) {two}-{three}'
