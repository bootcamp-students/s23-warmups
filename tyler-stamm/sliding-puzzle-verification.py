def is_solved(board):
    n = len(board)
    for row in range(n):
        for col in range(n):
            if board[row][col]!= row * n + col:
                return False
    return True

    
    
    
    
    
    
    
    
    
    
    
    #     n = 
#     for num in board:
#         if num[0]  * num[0] - 1 == num[-1]:
#             return False
#         else:
#             return True
