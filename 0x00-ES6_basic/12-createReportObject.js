export default function createIteratorObject(report) {
  return {
    allEmployees: {
      ...report,
    },
    getNumberOfDepartments(empList) {
      return Object.keys(empList).length;
    },
  };
}
