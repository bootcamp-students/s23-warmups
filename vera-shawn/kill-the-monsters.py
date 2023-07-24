# BEGIN
# RETURN needs to be a string
# RETURN has to be in format "hits: #, damage: #, health: #"
# END
import math
def kill_monsters(health, monsters, damage):
    hits = math.floor((monsters - 1) / 3) # rounded numbers of monsters divided by 3 hits
    char_damage = hits * damage # damage is number of hits times damage
    char_health = health - char_damage # character health
    if char_health <= 0: # if statement if health is below 0
        return "hero died"
    else:
        return f"hits: {hits}, damage: {char_damage}, health: {char_health}" # TODO