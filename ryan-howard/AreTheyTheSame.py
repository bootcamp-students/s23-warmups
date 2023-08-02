# def comp(arr1, arr2):
#     order1 = {}
#     order2 = {}
#     if arr1 is None or arr2 is None:
#         return False
#     if len(arr1) != len(arr2):
#         return False
    
def comp(arr1, arr2):
    if arr1 is None or arr2 is None:
        return False
    if len(arr1) == 0 and len(arr2) == 0:
        return True
    if len(arr1) != len(arr2):
        return False
    arr1.sort()
    arr2.sort()
    print(arr1)
    print(arr2)
    
    return sorted([i ** 2 for i in arr1]) == sorted(arr2)   
    
    return True

# def comp(array1, array2):
#     try:
#         return sorted([i ** 2 for i in array1]) == sorted(array2)
#     except:
#         return False
  
    # loop through array 1 and array 2
    # if arr2 is equal to any of arr1 elements exponent of 2, return true
    #arr2 must have squared value for each arr1 value
    #if not, return false
	#If a or b are null or none, return false
    #if lengths arent the same, they cant be the same, so false
