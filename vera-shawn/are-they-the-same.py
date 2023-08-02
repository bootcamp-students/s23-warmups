# BEGIN
# INPUT - two arrays
# check whether the two arrays have the same elements and same multipliticities 
# arguments can be NONE if true RETURN false
# RETURN true or false 
# END


def comp(array1, array2):
    list = []
    if array1 == None or array2 == None:
        return False
    for num in sorted(array1):
        list.append(num*num)
    list.sort()
    if list == sorted(array2):
        return True
    else:
        return False