# BEGIN
# INPUT will alway sbe a non-negative integer
# RETURN 0 IF INPUT is 0
# RETURN number of breaks it would take
# END

def break_chocolate(n, m):
    if n * m == 0:
        return 0
    else:
        return n * m - 1