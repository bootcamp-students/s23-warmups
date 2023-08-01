def is_solved(board):

    n = len(board)
    
    # Check if each tile is in its correct position
    for row in range(n):
        for col in range(n):
            if board[row][col] != row * n + col:
                return False

    # All tiles are in their correct positions
    return True
