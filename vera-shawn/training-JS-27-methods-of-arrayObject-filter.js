// begin
// given a numbers array
// count the grade distribution of the scores
// use filter()
// return as an object
// end


function countGrade(scores){
    //coding here...
    let filteredGrade = {
      S: scores.filter(x=>x===100).length,
      A: scores.filter(x=>x<100 && x>=90).length,
      B: scores.filter(x=>x<90 && x>=80).length,
      C: scores.filter(x=>x<80 && x>=60).length,
      D: scores.filter(x=>x<60 && x>=0).length,
      X: scores.filter(x=>x===-1).length
    };
    return filteredGrade;
    
  }