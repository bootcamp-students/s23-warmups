def sq_in_rect(lng, wdth):
    if lng == wdth:
        return None

    squares = []

    while lng != wdth:
        max_side = min(lng, wdth)
        squares.append(max_side)

        if lng > wdth:
            lng -= max_side
        else:
            wdth -= max_side

    squares.append(lng)  # or wdth, they are equal at this point
    return squares
