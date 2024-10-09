const students = {
    Sonam: 76,
    Pema: 61,
    Sangay: 50,
    Dechen: 55,
    Lhaki: 92,
    Karma: null,
    Yuden: 81
  };
  
  function processScores(studentObj) {
    let result = [];
  
    for (let student in studentObj) {
      let score = studentObj[student];
  
      if (score === null) {
        break;
      }
      if (score < 50) {
        continue;
      }
  
      result.push({ name: student, score: score });
    }
  
    return result;
  }
  
  console.log(processScores(students));
  