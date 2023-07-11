#BEGIN
#LxWxH
#2*d*w + 2*d*h + 2*h*w
#return new values as arr?
#END


def get_size(w,h,d):
    #your code here
    surface_area = 2*d*w + 2*d*h + 2*h*w
    volume = w * h * d
    return [surface_area, volume]
    print(surface_area)
