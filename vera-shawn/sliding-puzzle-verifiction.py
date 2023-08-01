# BEGIN
# INPUT - 2 lists (a grid)
# a solved grid will have tiles in order of label left to right and top to bottom
# RETURN true if the grid is solved
# RETURN false if grid is unsolved


def is_solved(board):
    for x in board:
        for y in x:
            if y != 0:
                return False
            else:
                return True