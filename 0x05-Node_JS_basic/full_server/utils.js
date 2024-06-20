const fs = require("fs");

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(Error("Cannot load the database"));
        return;
      }

      const students = data.split(/\r?\n/).filter(Boolean).slice(1);
      // console.log(`Number of students: ${students.length}`);

      const fields = {};
      for (const student of students) {
        const stData = student.split(",");

        const stFirstName = stData[0];
        const stField = stData[stData.length - 1];

        if (fields[stField]) {
          fields[stField][0] += 1;
          fields[stField].push(stFirstName);
        } else {
          fields[stField] = [1, stFirstName];
        }
      }

      resolve(fields);
    });
  });
}

/* function printResult(result) {
    console.log(result);
}
readDatabase("database.csv").then(printResult);
*/

module.exports = readDatabase;
