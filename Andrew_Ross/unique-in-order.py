def unique_in_order(sequence):
    unique_sequence = []   # Create an empty list to store the unique elements in order
    prev_element = None    # Initialize a variable to keep track of the previously seen element

    # Iterate through each element in the input sequence
    for current_element in sequence:
        # Check if the current element is different from the previously seen element
        if current_element != prev_element:
            # If it's different, add it to the unique_sequence list
            unique_sequence.append(current_element)
            # Update the prev_element to the current element for the next iteration
            prev_element = current_element

    # Return the list containing unique elements in the order they appeared
    return unique_sequence
