var Director = /** @class */ (function () {
    function Director() {
        this.workFormHome = function () { return "Working from home"; };
        //  getToWork = () => "Getting a work break";
        this.getCoffeeBreak = function () { return "Getting a work break"; };
        this.workDirectorTasks = function () { return "Getting to director tasks"; };
    }
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFormHome = function () { return "Cannot work from home"; };
        this.getCoffeeBreak = function () { return "Cannot have a break"; };
        this.workTeacherTasks = function () { return "Getting to work"; };
    }
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));
//# sourceMappingURL=main.js.map