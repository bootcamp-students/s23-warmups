def comp(array1, array2):
    if array1 is None or array2 is None:
        return False
    array1_squared = [num**2 for num in array1]
    array1_squared.sort()
    array2.sort()
    return array1_squared == array2
