def comp(array1, array2):
    if array1 is None or array2 is None:
        return False

    if len(array1) != len(array2):
        return False

    frequency_dict = {}
    for num in array2:
        frequency_dict[num] = frequency_dict.get(num, 0) + 1

    for num in array1:
        square = num ** 2
        if square not in frequency_dict or frequency_dict[square] == 0:
            return False
        frequency_dict[square] -= 1

    return True

    return False
            
