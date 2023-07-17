def century(year):
    if year < 1000:
        return year // 100 + 1 #takes all years 1-999 and divides by 100 to show current cuntry/milenia and adds one to show proper form of century
    elif year >= 1000 and year % 100 == 0:
        return year / 100
    else:
        return year // 100 + 1
    
    


#Begin
#given a year 
#must return year as century rather than full year
#evalute primary year numbers (18,19,20)
#round up on primary year and remove secondary years (1852-> 19)
#return century
#end
