const fs = require("fs");

(function getStudentData(path) {
  let content;
  const data = [];
  try {
    content = fs.readFileSync(path, "utf-8");
  } catch (error) {
    return "Cannot load the database";
  }

  const students = content.split(/\r?\n/).filter(Boolean).slice(1);
  let message = `Number of students: ${students.length}`;
  data.push(message);

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
  console.log(fields);
  for (const k of Object.keys(fields).sort()) {
    const firstName = fields[k].slice(1).join(", ");
    message = `Number of students in ${k}: ${fields[k][0]}. List: ${firstName}`;
    data.push(message);
  }
  return data.join("\n");
})("database.csv");
