import math
def kill_monsters(health, monsters, damage):
    # after you punch 3, get hit once
    # return a string at the end
    # if health <= 0, return "hero died"
    # else 
    # if monsters > 3, take a hit
    # hits is 
    # health is equal to health-damage times the number of hits
    # // division

    if monsters <= 3:
        hits = 0
        return f"hits: 0, damage: 0, health: {health}"
    elif monsters > 3:
        hits = math.floor((monsters - 1) // 3)
        damage = hits * damage
        health = health - damage
        if health <= 0:
            return "hero died"
        else:
            return f"hits: {hits}, damage: {damage}, health: {health}"
