def is_solved(board):
    n=len(board)
    for row in range(n):
        for col in range(n):
            if board[row][col] != row * n + col:
                return False
    return True
    


#board is always going to be 0-3
#for loop/nested for loop to iterate through the two arrays 
#create a variable to iterate through what the order of the board would be
