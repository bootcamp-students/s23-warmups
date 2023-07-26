def unique_in_order(sequence):
    if not sequence:
        return []

    result = [sequence[0]]

    for i in range(1, len(sequence)):
        if sequence[i] != sequence[i - 1]:
            result.append(sequence[i])

    return result

#Initialize with first one always in the bracket
#For loop to iterate through a range of them starting at the second one
#if current in loop does not match previous, append it
