# Return an array that contains the volume and surface area
# Parameters: Width, Height, Depth 
# Volume is equal to width x height x depth, (store in a variable)
# Surface Area = 2 * width * height + height * depth + width * depth (store in a variable)
# Return a list [] with these two variables

def get_size(w, h, d):
    volume = w * h * d
    area = 2 * (w * h + h * d + w * d)
    return [area, volume]
