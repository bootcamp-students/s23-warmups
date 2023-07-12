def find_short(s):
    shortest = s.split()
    shortest.sort(key=len)
    return len(shortest[0])
    
    
    
#BEGIN
#INIT
    #new var to hold list of words
#FNCTN
    #sort by length
    #return index 0
