
// problem1
const employees = [
  {
    name: 'sam',
    department: 'tech',
    designmation: 'manager',
    salary: 40000,
    raiseEligible: true,
  },
  {
    name: 'mary',
    department: 'finance',
    designmation: 'trainee',
    salary: 18500,
    raiseEligible: true,
  },
  {
    name: 'bob',
    department: 'HR',
    designmation: 'executive',
    salary: 21200,
    raiseEligible: false,
  },
];
console.log('problem1', employees);
// problem2
const company = {
  companyName: 'Tech Stars',
  website: 'www.techstars.site',
  employees: employees,
}
console.log('problem2', company);
// problem3
function addEmployee(employeeName, department, designation, salary, raiseEligible){
  const newEmployee = {
    name: employeeName,
    department: department,
    designmation: designation,
    salary: salary,
    raiseEligible: raiseEligible,
  };
  employees.push(newEmployee);
}
addEmployee('Anna', 'tech', 'executive', 25600, false)
console.log('problem3', company);
// problem4
let totalSalary = employees[0].salary + employees[1].salary + employees[2].salary + employees[3].salary;
console.log('Problem 4', totalSalary);

let totalSalaryBetter = 0;
for (let i = 0; i < employees.length; i++){
  totalSalaryBetter += employees[i].salary;
}
console.log('Problem 4 better', totalSalaryBetter);
// problem5
function doRaises(){
  for (let i = 0; i < employees.length; i++){
    if(employees[i].raiseEligible){
      console.log('do raise');
      employees[i].salary *= 1.1;
      employees[i].raiseEligible = false;
    }
  }
}
doRaises();
console.log('problem 5', employees);
// problem6
const workFromHomePpl = ['anna', 'sam']
function setWFH(){
  for (let i = 0; i < employees.length; i++){
    employees[i].wfh = workFromHomePpl.includes(employees[i].name);
    // employees[0].wfh = true;
    // employees[3].wfh = true;
  }
}
setWFH();
console.log('problem 6', employees);
