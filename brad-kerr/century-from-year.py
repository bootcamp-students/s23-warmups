# Return the two digit century the (year) is in
# Minus 1 from the year to account for the centurys that are 1900, 1800 etc
# Divide the number by 100 then add 1 to t. 

def century(year):
    newnum = year - 1
    answer = newnum / 100 + 1
    return int(answer) 
