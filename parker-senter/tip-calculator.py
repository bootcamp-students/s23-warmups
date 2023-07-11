#pulls math in
import math
def calculate_tip(amount, rating):
    # checks what the rating is and gives the right tip amount
    if rating.lower() == "terrible":
        return 0
    #sets the rating to all lowercase
    elif rating.lower() == "poor":
        #rounds up to the nearest whole number
        return math.ceil(amount * 0.05)
    elif rating.lower() == "good":
        return math.ceil(amount * 0.1)
    elif rating.lower() == "great":
        return math.ceil(amount * 0.15)
    elif rating.lower() == "excellent":
        return math.ceil(amount * 0.2)
    else:
        return "Rating not recognised"
    
"""
Pusedocode
takes in the rating 
turns the rating to lower case
checks what the rating is
takes the total and multiplies it by the tip amount
rounds the tip up to the nearest whole number
"""
