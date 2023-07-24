def break_chocolate(n, m):
    if n <= 0 or m <= 0:
        return 0

    # Calculate the total number of squares in the chocolate bar
    total_squares = n * m

    # The number of breaks needed will be equal to total_squares - 1
    # because each break produces one new square
    breaks_needed = total_squares - 1

    return breaks_needed
