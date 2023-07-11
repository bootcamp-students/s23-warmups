def get_size(w,h,d):
    # surface area= w times h times d
    # volume= Surface Area = 2lw + 2lh + 2wh
    # add empty array
    # define surface area and volume
    # append to new array and return
  result = [];
  surfaceArea = (2 * (w * h)) + (2 * (w * d)) + (2 * (h * d));
  volume = w * h * d;
  result.append(surfaceArea);
  result.append(volume);
  return result;
  
