def likes(names):
    # Step 1
    if len(names) == 0:
        return "no one likes this"
    
    # Step 2
    if len(names) == 1:
        return f"{names[0]} likes this"
    
    # Step 3
    if len(names) == 2:
        return f"{names[0]} and {names[1]} like this"
    
    # Step 4
    if len(names) == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        others_count = len(names) - 2
        return f"{names[0]}, {names[1]} and {others_count} others like this"
