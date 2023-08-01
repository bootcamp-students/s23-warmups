# Return: True or False
# Parameter: A nested list of integers 
# Order the tiles would appear in a solved grid

def is_solved(board):
    n = len(board)
    target_sequence = [x for x in range(n * n)]
    flattened_board = [col for row in board for col in row]
    return flattened_board == target_sequence
