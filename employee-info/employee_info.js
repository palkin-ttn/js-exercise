let employee = [
  {name: "Palkin", age: '21', salary: 7500, DOB: "08-10-1999"},
  {name: "Milan", age: '30', salary: 9000, DOB: "12-03-1991"},
  {name: "Sakshi", age: '26', salary: 500, DOB: "27-05-1995"},
  {name: "Prachi", age: '18', salary: 400, DOB: "30-07-2003"},
  {name: "Kashish", age: '25', salary: 4500, DOB: "01-09-1996"},
  {name: "Megha", age: '19', salary: 1000, DOB: "11-07-2002"},
  {name: "Ankit", age: '16', salary: 700, DOB: "06-08-2005"},
  {name: "Aman", age: '24', salary: 6000, DOB: "19-01-1997"},
  {name: "Ram", age: '27', salary: 500, DOB: "04-04-1994"},
  {name: "Sonam", age: '23', salary: 8000, DOB: "17-06-1998"},
  {name: "Riya", age: '22', salary: 900, DOB: "10-09-1999"}
];

console.log(filter_1())
console.log(filter_2())
console.log(filter_3())

function filter_1(){
    let salaryArray = employee.map(data => data.salary)
    return salaryArray.filter(salary => salary > 5000)
    
}


function filter_2(){
    let age = employee.reduce((r, a) => {
    r[a.age] = [...(r[a.age] || []), a];
    return r;
}, {});
console.log(age);
}


function filter_3(){
    const salaryInc = employee.filter((emp) => {
        if(emp.salary < 1000 && emp.age > 20){
            emp.salary *= 5
            return true
        }
        return false
    })
    return salaryInc;
}
