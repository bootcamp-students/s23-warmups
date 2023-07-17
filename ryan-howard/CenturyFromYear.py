def century(year):
    # Finish this :)
    century = year // 100 
    if year % 100 == 0:
        return century
    return century + 1
