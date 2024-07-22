const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const header = lines.shift();

    const students = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      if (line.trim().length > 0) {
        const [firstname, lastname, age, field] = line.split(',');

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents += 1;
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        const studentList = students[field].join(', ');
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${studentList}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
