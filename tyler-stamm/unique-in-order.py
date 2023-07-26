def unique_in_order(sequence):
    # remove duplicates that are next to each other
    # check if you want to remove them
    # declare new array as variable
    # loop through it
    # if item is > than previous index, add it to new array
    # return the new array
    result = []
    last_item = None
    for item in sequence:
        if item != last_item:
            result.append(item)
            last_item = item
    return result
