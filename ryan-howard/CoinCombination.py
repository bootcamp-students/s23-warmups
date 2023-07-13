def coin_combo(cents):
    coin_combo = [0, 0, 0, 0] 
    coin_combo[3] = cents // 25  
    cents %= 25 
    coin_combo[2] = cents // 10 
    cents %= 10  
    coin_combo[1] = cents // 5  
    cents %= 5  
    coin_combo[0] = cents 
    return coin_combo


#create empty array
#calculate by dividing by each number for each from biggesto smaller
#get remainders of each, going from biggest to smallest, to find leftover cents for dimes, nickels, and then pennies 
#place them in each spot within an array
