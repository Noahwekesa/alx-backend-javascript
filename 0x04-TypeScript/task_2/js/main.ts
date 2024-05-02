interface DirectorInterface {
  workFormHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFormHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFormHome = () => "Working from home";
  //  getToWork = () => "Getting a work break";
  getCoffeeBreak = () => "Getting a work break";
  workDirectorTasks = () => "Getting to director tasks";
}
class Teacher implements TeacherInterface {
  workFormHome = () => "Cannot work from home";
  getCoffeeBreak = () => "Cannot have a break";
  workTeacherTasks = () => "Getting to work";
}
function createEmployee(salary: number | string) {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}
function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching math";
  }
  return "Teaching history";
}
