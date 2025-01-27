const students = [
    { name: "Mohamed", grades: [80, 90, 100], passed: false },
    { name: "Ali", grades: [60, 70, 65], passed: false },
    { name: "Salah", grades: [85, 95, 100], passed: false },
  ];
function average_of_grades(student) {
    let sum = 0;
    student.grades.forEach(grade => {
        sum += grade;
    });
    let average = (sum / student.grades.length).toFixed(2);
    student.average = average;
    return average;
}
students.forEach(student => {
    average_of_grades(student);
    if(student.average >= 70){
        student.passed = true;
    } else {
        student.passed = false;
    }
});
students.sort((a, b) => {
    return b.average - a.average;
});
students.forEach(student => {
    console.log(`${student.name}: Average = ${student.average}, Passed = ${student.passed}`)
});
