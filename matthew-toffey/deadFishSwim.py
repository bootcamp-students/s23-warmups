def parse(data):
    # TODO: your code here
    output = 0
    newArr = []
    for item in data:
        if item == 'i':
            output += 1
        elif item == 'd':
            output -= 1
        elif item == 's':
            output *= output
        elif item == 'o':
            newArr.append(output)
    return newArr

#begin
#given a list of processes to be looped through
#"input" will determine output method
#set process to be completed based on key given
#sotre values in arr
#end
