def find_short(s):
  # Split the string into words
    words = s.split()

    # Initialize the shortest length with a large value
    shortest_length = float('inf')

    # Iterate over each word and update the shortest length if necessary
    for word in words:
        word_length = len(word)
        if word_length < shortest_length:
            shortest_length = word_length

    # Return the shortest length
    return shortest_length
