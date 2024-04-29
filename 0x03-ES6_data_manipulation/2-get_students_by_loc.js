export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.city === city);
}
