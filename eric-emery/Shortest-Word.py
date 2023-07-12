def find_short(s):
    arr = s.split(' ')
    smallest = arr[0]
    for i in range(1, len(arr)):
        if len(arr[i]) < len(smallest):
            smallest = arr[i]
    return len(smallest)
