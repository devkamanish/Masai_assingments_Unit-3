
function processData(students) {
  
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes("alice") && student.score >=50
  )

  const sortedStudents = filteredStudents.sort((a,b)=> b.score - a.score);

 const rankedStudents = sortedStudents.map((student,ind)=>{
   return {
    name : student.name.trim().toUpperCase(),
    score : student.score,
    rank : ind+1

   }
 })
  
  const totalPassed = rankedStudents.reduce(count => count + 1, 0);
  
  return {
    totalPassed,
    students: rankedStudents
  };  
}
    

console.log(processData([
  { name: ' Alice Cooper ', score: 85 },
  { name: 'bob alice', score: 42 },
  { name: 'Alice Wonderland', score: 70 },
  { name: ' david', score: 30 }
 ]));
