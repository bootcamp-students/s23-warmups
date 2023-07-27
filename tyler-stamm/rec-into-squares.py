def sq_in_rect(length, width):
    if length == width:
        return None
    squares = []
    while length > 0 and width > 0:
        if length > width:
            squares.append(width)
            length -= width
        else:
            squares.append(length)
            width -= length
    return squares
