import math

def century(year):
    # 0-100 is 1
    # return the century
    # create a variable called century that counts the number of 100's
    # it gets to 100, century + 1
    # return integer of new variable
    year = year - 1
    century = year / 100 + 1
    return int(century)
