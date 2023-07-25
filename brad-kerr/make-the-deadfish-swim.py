# Return: An array of integers based of the deadfish equation 
# Parameters: A string 
# Loop through each individual string character 
# Make if statements based of the 4 commands 
# Return answer 

def parse(data):
    deadfish = []
    answer = 0
    for char in data: 
        if char == 'o':
            deadfish.append(answer)
        if char == 'i':
            answer += 1
        if char == 'd':
            answer -= 1
        if char == 's':
            answer **= 2
          
            
    return deadfish 
