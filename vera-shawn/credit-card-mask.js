// begin
// given a string
// return given string with all but last 4 numbers replaced with "#"
// end


// return masked string
function maskify(cc) {
    return cc.split("").map((x,i) => (i < cc.length - 4) ? x="#" : x).join("");
      
    
    }
    