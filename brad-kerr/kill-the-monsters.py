# Return will be a string
# Parameters are integers, health, monsters, monsters damage
# Hits is monsters / 3 
# Damage is hits multiplied by damage
# Health is health - damge_taken 

def kill_monsters(health, monsters, damage):
    hits = int((monsters - 1) / 3)
    damage_taken = hits * damage
    remaining_health = int(health - damage_taken)
    if remaining_health <= 0:
        return "hero died" 

    return f"hits: {hits}, damage: {damage_taken}, health: {remaining_health}"
