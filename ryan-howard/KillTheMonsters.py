
import math
def kill_monsters(health, monsters, damage):
    if monsters <= 3 :
        return 'hits: %d, damage: %d, health: %d' %(0,0,health)
    else:
        k = math.floor((monsters - 1) // 3)
        if k*damage >= health:
            return ('hero died')
        else:
            return ('hits: %d, damage: %d, health: %d' %(k,k*damage,health-(k*damage)))
        
#INIT
#Calculate number/groups of monsters
#Saitama takes no damage if there are 3 or fewer monsters
#if there more than multiple of 3, account for the one that hits Saitama
#If the damage used is higher than the health left, then 'hero died'
# otherwise return hits/damage/health
#END
