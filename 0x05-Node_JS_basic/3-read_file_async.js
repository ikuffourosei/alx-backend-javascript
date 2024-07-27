const fs = require('node:fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const newData = data.trim().split('\n');
      // remove first line( header line)
      newData.shift();
      const students = {};
      let totalStudents = 0;

      newData.forEach((line) => {
        if (line.trim().length > 0) {
          const [firstname, , , field] = line.split(',');

          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
          totalStudents += 1;
        }
      });

      console.log(`Number of students: ${totalStudents}`);
      for (const field in students) {
        if (Object.prototype.hasOwnProperty.call(students, field)) {
          const studentList = students[field].join(', ');
          console.log(`Number of students in ${field}: ${students[field].length}. List: ${studentList}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
