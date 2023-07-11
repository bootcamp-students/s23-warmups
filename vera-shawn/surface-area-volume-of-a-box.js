# begin
# given integers
# surface area formula (SA)=2lw+2lh+2hw
# volume formula Volume = length x width x height
# return surface area
# return volume
# end


def get_size(w,h,d):
    #your code here
    surface_area = 2*d*w + 2*d*h + 2*h*w
    volume = w * h * d
    return [surface_area, volume]
    print(surface_area)