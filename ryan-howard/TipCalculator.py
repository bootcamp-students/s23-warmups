import math

def calculate_tip(amount, rating):
    rating = rating.lower()  # Convert the rating to lowercase
    
    if rating == "terrible":
        tip_percentage = 0
    elif rating == "poor":
        tip_percentage = 5
    elif rating == "good":
        tip_percentage = 10
    elif rating == "great":
        tip_percentage = 15
    elif rating == "excellent":
        tip_percentage = 20
    else:
        return "Rating not recognised"
    
    tip_amount = amount * tip_percentage / 100  # Calculate the tip amount
    rounded_tip_amount = math.ceil(tip_amount)  # Round up the tip amount
    
    return rounded_tip_amount
