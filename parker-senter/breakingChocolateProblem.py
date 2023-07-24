def break_chocolate(n, m):
    if ((n>1 and m>1) or (n>1 and m==1) or (n==1 and m>1)):
        return n * m - 1;
    else:
        return 0;
    
"""
PSEUDOCODE
Take in 2 numbers
check if the numbers or one or higher
multiply the numbers together and minus by one
return the new number
if both are less than 1 return 0
"""
