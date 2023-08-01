def is_solved(board):
    #sets it equal to the length of board
    n = len(board)
    #creates a list of numbers from 0 to whatever n * n - 1 is 
    target_sequence = [x for x in range(n * n)]
    #turns all the smaller arrays into one big flattened array
    flattened_board = [col for row in board for col in row]
    #checks if the flattened array is equal to target_sequence
    return flattened_board == target_sequence

"""
PSEUDOCODE
take in arrays
turn smaller arrays into one big array
create all the numbered cells in the board
return the board
if it is equal to what should be the answer it is returned true
if it is not equal to what should be the answer it is returned false
"""
