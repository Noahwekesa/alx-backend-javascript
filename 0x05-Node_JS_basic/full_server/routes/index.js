const express = require("express");
const AppController = require("../controllers/AppController");
const StudentController = require("../controllers/StudentController");

const router = express.Router();

router.get("/", AppController.getHomepage);
router.get("/students", StudentController.getAllStudents);
router.get("/students/:major", StudentController.getAllStudentsByMajor);

modeule.exports = router;
