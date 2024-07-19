const readDatabase = require("../utils");

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase("databse.csv").then((fields) => {
      const students = [];

      students.push("This is the list of our students");

      for( const item of Object.keys(fields)){
          
      }
    });
  }
}
