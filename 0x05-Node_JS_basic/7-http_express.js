const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const { url } = req;

  switch (url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
      break;
    case '/students':
      const filePath = process.argv[2]; // Get database path from argument
      if (!filePath) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Missing database file');
        return;
      }

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error reading database');
          return;
        }

        const studentList = processStudents(data); // Process student data

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${studentList}`);
      });
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
  }
});

function processStudents(data) {
  const students = data
    .split('\n')
    .filter((student) => student)
    .map((student) => student.split(','))
    .map((student) => student[0])
    .join('\n');
  return students;
}
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});
module.exports = app;
