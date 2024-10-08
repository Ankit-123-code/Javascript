// function Employee(name,age,salary,Department,task){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
//     this.department=Department;
//     this.Task=task;
// }
// let Employee1=new Employee("vikas",27,40000,"Faculty","teaching")
// console.log(Employee1);


function kam(name,Salary,age,Department){
    this.name=name;
    this.Salary=Salary;
    this.age=age;
    this.Department=Department;

}
let kam1=new kam("vikas",40000,27,function Faculty(online,offline){
    this.online=online;
    this.offline=offline;

});
kam1.Department("Study","Chatting")
console.log(kam1);

