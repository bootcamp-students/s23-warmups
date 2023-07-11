def get_size(w, h, d):
    volume = w * h * d
    area = 2 * (w * h + h * d + w * d)
    return [area, volume]

"""
PSEUDOCODE
take in the w, h, d of a shape
mulitply all for the volume
multiply all and by 2 for area
return values
"""
