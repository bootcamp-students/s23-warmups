def unique_in_order(sequence):
    unique_sequence = []   
    prev_element = None    

    
    for current_element in sequence:
        if current_element != prev_element:
            unique_sequence.append(current_element)
            prev_element = current_element
    return unique_sequence

#given string
#loop through sting and replace any duplicate letters
#return new list that has only unique symbols
