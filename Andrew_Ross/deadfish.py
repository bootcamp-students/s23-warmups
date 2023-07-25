def parse(code):
    value = 0
    result = []
    for char in code:
        if char == 'i':
            value += 1
        elif char == 'd':
            value -= 1
        elif char == 's':
            value *= value
        elif char == 'o':
            result.append(value)
    return result
