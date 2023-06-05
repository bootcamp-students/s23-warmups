# Create tip calculator #

**Procedural**

START

INPUT user input of bill amount

CONVERT calculate % amount of given INPUT

OUTPUT float number in dollar amount

OUTPUT message to user if NaN

END

**Functional**

*Variables:*

tip

terribleTip

poorTip

goodTip

greatTip

excellentTip

*Functions*

```javaScript function terribleTip(amount) {
    if (tip <= terribleTip) {
        return "Tip more please"
    }
} ```


function calculateTip(amount, rating) {
    //each statement returns the tip amount based on the service
    let rate = rating.toLowerCase();
    if (rate === 'excellent') {
      return Math.ceil(amount*20/100);
    }
    else if (rate === 'great') {
      return Math.ceil(amount*15/100);
    }
    else if (rate === 'good') {
      return Math.ceil(amount*10/100);
    }
    else if (rate === 'poor') {
      return Math.ceil(amount*5/100);
    }
    else if (rate === 'terrible') {
      return Math.ceil(amount*0/100);
    }
    else {
      return ("Rating not recognised");
    }
  }