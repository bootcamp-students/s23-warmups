# BEGIN
# GIVEN a year as an integer 4 digits
# RETURN the century of that year as an integer
# END

def century(year):
    year = year - 1
    century = year / 100 + 1
    
    return int(century)