const readDatabase = require("../utils");

class StudentsController {
  static getAllStudents(request, response, database) {
    // response.status(200)
    readDatabase(database)
      .then((res) => {
        const data = ["This is the list of our students"];
        for (const k of Object.keys(res).sort()) {
          const firstName = res[k].slice(1).join(", ");
          const message = `Number of students in ${k}: ${res[k][0]}. List: ${firstName}`;
          data.push(message);
        }
        response.status(200).send(data.join("\n"));
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response, database) {
    const param = request.params.major;
    // console.log(param);
    // console.log(typeof param);
    if (param !== "CS" && param !== "SWE") {
      response.status(500).send("Major parameter must be CS or SWE");
    } else {
      readDatabase(database)
        .then((res) => {
          const data = res[param].slice(1);
          response.status(200).send(`List: ${data.join(", ")}`);
        })
        .catch((err) => {
          response.status(500).send(err.message);
        });
    }
  }
}

module.exports = StudentsController;
