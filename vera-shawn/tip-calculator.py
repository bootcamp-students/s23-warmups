# begin
# convert javascript solution to python
# end

import math


def calculate_tip(amount, rating):
    # each statement returns the tip amount based on the service
    rate = rating.lower()
    if rate == "excellent":
      return math.ceil(amount*20/100)
    elif rate == 'great':
      return math.ceil(amount*15/100)
    elif rate == 'good':
      return math.ceil(amount*10/100)
    elif rate == 'poor':
      return math.ceil(amount*5/100)
    elif rate == 'terrible':
      return math.ceil(amount*0/100)
    else:
      return ("Rating not recognised")