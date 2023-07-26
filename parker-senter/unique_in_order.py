def unique_in_order(sequence):
    #checks if sequence is empty
    #if it is empty returns an empty list
    if not sequence:
        return []
    #sets result as first item because there is nothing to compare it with
    result = [sequence[0]]
    #for loop to go through everything in sequence
    #start at index one because we compare everything to the last index
    for i in range(1, len(sequence)):
        #checks if the current index is different from the index before it
        if sequence[i] != sequence[i - 1]:
            #if the index is different it is appended to the list
            result.append(sequence[i])
    return result

"""
PSEUDOCODE
take in list of items
check if list is empty
check all elements and if they are different than the one before them append them to this list
"""
