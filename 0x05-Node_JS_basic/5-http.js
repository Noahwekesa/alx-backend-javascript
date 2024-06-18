const http = require('http');
const fs => require('fs');

const app = http.createServer((req, res) =>{
  const url = req.url;

   switch (url){
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello Holberton School!');
      break;
    case '/students': 
      const filePath = process.argv[2];
      if (!filePath){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Missing database file');
        return;
      }
    const studentList = processStudents(Data);
      res.writeHead(100, {'Content-Type': 'text/plain'});
      res.end(`This is the list of out students\n ${studentList}`);
break
      default:
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
        break;
  }
})
