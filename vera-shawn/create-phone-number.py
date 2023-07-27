#BEGIN
#INPUT - list of 10 integers between 0 and 9
#RETURN integers in the format of a phone number (###)###-####
#END
def create_phone_number(n):
    # return list of number in format of a phone number using a f string
    return f'({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}'