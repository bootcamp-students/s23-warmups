def kill_monsters(health, monsters, damage):
    hits = int((monsters -1) / 3)
    total_damage = hits * damage
    remaining_health = int(health - total_damage)
    
    if remaining_health <= 0:
        return "hero died"
    else:
        return f"hits: {hits}, damage: {total_damage}, health: {remaining_health}"
    
#BEGIN
#Given a scenario of hits, monsters and damage
#must evaluate remaining health, hits and damage done to string based on monsters
#return hero died if health value ,<=0
#return hits, damage and health if health is > 0
