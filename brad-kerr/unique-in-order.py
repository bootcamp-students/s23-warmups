# Return: A list of items with no duplicates. 
# Parameters: A sequence that contains duplicates. 
# If the index of sequence is not equal to the previous index then push that index to an answer variable

def unique_in_order(sequence):
    answer = []
    for item in sequence:
        if not answer or item != answer[-1]:
            answer.append(item)
            
    return answer
