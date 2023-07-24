import math

def kill_monsters(health, monsters, damage):
    #there will be no damage taken if the monsters are 3 or less
    if monsters <= 3 :
        return 'hits: %d, damage: %d, health: %d' %(0,0,health)
    else:
        #calculates the groups of monsters
        k = math.floor((monsters - 1) / 3)
        #checks to see if we died
        if k*damage >= health:
            return ('hero died')
        #returns the hits, damage, and health
        else:
            return ('hits: %d, damage: %d, health: %d' %(k,k*damage,health-(k*damage)))
        
"""
PSEUDOCODE
take in 3 params (health, monsters, damage)
check how many monsters there are
if there are 3 or less return 0 hits and 0 damage with our health
if there are more than 3 calculate how many groups of 3 there are and take away one to account for the one that hits us
check to see if the damage is greater than or equal to our health to see if we died
if not dead then return the hits, damage, and health
"""
