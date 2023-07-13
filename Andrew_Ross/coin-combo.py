def coin_combo(cents):
    coins = [1, 5, 10, 25]  # pennies, nickels, dimes, quarters
    result = [0, 0, 0, 0]  # number of coins for each denomination

    for i in range(len(coins) - 1, -1, -1):
        result[i] = cents // coins[i]  # calculate number of coins for current denomination
        cents %= coins[i]  # update remaining cents value

    return result
