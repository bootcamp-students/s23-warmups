def comp(array1, array2):
    #checks if array is empty
    if array1 is None or array2 is None:
        return False
    #squares all the numbers in the first array
    array1_squared = [num**2 for num in array1]
    #sorts both arrays
    array1_squared.sort()
    array2.sort()
    #checks if both arrays are equal to each other
    return array1_squared == array2
