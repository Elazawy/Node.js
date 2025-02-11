const http = require("http");
const fs = require('fs');
// const { json } = require("stream/consumers");

const server = http.createServer((req, res) => {
    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(err.message);
            return;
        }

        const students = JSON.parse(data);
        if (req.url === "/students") {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(students));
        }
        else if (req.url === "/students/active"){
            let active_students = students.filter(student => student.status === "active");
            res.end(JSON.stringify(active_students));
        }
        else if (req.url === "/students/inactive"){
            let active_students = students.filter(student => student.status === "inactive");
            res.end(JSON.stringify(active_students));
        }
        else if (req.url === "/students/top") {
            res.end(JSON.stringify(students.reduce((prev_stud, curr_stud) => 
                prev_stud.grades.reduce((prev_grade, curr_grade) => prev_grade + curr_grade, 0) > 
                curr_stud.grades.reduce((prev_grade, curr_grade) => prev_grade + curr_grade, 0) ? 
                prev_stud : curr_stud)));
        }
        else if(req.url === "/students/fail"){
            let failed = students.filter(student =>
            student.grades.reduce((prev, curr) => prev+curr, 0)/student.grades.length < 60) 
            res.end(JSON.stringify(failed));
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
