function countGrade(scores) {
  var gradeCount = {S: 0,A: 0,B: 0,C: 0,D: 0,X: 0};

  scores.forEach(function(score) {
    if (score === -1) {
      gradeCount.X++;
    } else if (score < 60 && score >= 0) {
      gradeCount.D++;
    } else if (score < 80 && score >= 60) {
      gradeCount.C++;
    } else if (score < 90 && score >= 80) {
      gradeCount.B++;
    } else if (score < 100 && score >= 90) {
      gradeCount.A++;
    } else if (score === 100) {
      gradeCount.S++;
    }
  });

  return gradeCount;
}

//every grade count starts at 0
//if, else, else if  conditional with grades for the top and botrtom of the score, i can put them in any order
