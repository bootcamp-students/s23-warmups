def parse(data):
    # i = data + 1
    # d= data - 1
    # s = data * data
    # o = return data
    # for loop with if elif and else statements
    # append o results to new variable
    # else currentvalue = current value
    
    result = []
    currentValue = 0
    for x in data:
        if(x == "i"):
            currentValue = currentValue + 1
        elif(x == "d"):
            currentValue = currentValue - 1
        elif(x == "s"):
            currentValue = currentValue ** 2
        elif(x == "o"):
            result.append(currentValue)
        else:
            currentValue = currentValue
    return result
