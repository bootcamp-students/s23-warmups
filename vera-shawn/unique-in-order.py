# BEGIN
# INPUT - string, list, and a tuple
# Filter out repeat numbers
# RETURN a list of elements in the same order but without doubles
# END

def unique_in_order(sequence):
    answer = []
    prev = None
    for item in sequence:
        if item != prev:
            answer.append(item)
        prev = item
    
    return answer