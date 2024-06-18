function countStudents(path) {
  try {
    const data = fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }
      const lines = data.split('\n').filter((line) => line.length > 0);
      let count = 0;
      const fields = {};
      for (const line of lines) {
        count += 1;
        const student = line.split(',');
        if (fields[student[3]]) {
          fields[student[3]].push(student[0]);
        } else {
          fields[student[3]] = [student[0]];
        }
      }
      console.log(`Number of students: ${count}`);
      for (const field in fields) {
        if (field) {
          const list = fields[field];
          console.log(
            `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`,
          );
        }
      }
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
