const fs = require('fs');

function countStudents(filepath) {
  try {
    const data = fs.readFileSync(filepath, 'utf8').trim();
    const students = data.split('\n').filter((line) => line);

    if (!students.length) {
      throw new Error('No valid students found in the database');
    }
    const studentCounts = {};

    students.forEach((student) => {
      const [firstName, lastName, age, field] = student.split(' ,');
      if (field) {
        if (!studentCounts[field]) {
          studentCounts[field] = { count: 0, list: [] };
        }
        studentCounts[field].count++;
        studentCounts[field].list.push(firstName);
      }
    });
    console.log(`Number of students: ${students.length}`);

    for (const field in studentCounts) {
      const { count, list } = studentCounts[field];
      console.log(
        `Number of students in ${field} : ${count}. List: ${list.join(',')}`,
      );
    }
  } catch (error) {
    console.error('Cannnot load the database:', error.message);
  }
}

module.exports = countStudents;
