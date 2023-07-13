def coin_combo(cents):
    # BEGIN
    #INIT
    # create variable for the coin combo
    # takes an integer of cents and returs min number of coin combos
    # start with highest number
    # adjust cents[0] with counter and so on
    # divide cents by 25 (use modulus for remainder)
    coins = [0, 0, 0, 0]

    if cents >= 25:
        coins[3] = cents // 25
        cents %= 25

    if cents >= 10:
        coins[2] = cents // 10
        cents %= 10

    if cents >= 5:
        coins[1] = cents // 5
        cents %= 5

    coins[0] = cents

    return coins
