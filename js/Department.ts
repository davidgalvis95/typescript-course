class Department {

    // private id: string;
    // public name: string;
    // private employees: string[] = []
    protected employees: string[] = [];

    // This means that the id will only be created using the constructor but not accessed any other way // this is read only
    constructor(private readonly id: string, public name: string){
        this.name = name;
        this.id = id;
    } 

    describe(this: Department){
        console.log(`Department with id (${this.id}) : ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployees(){
        console.log(this.employees.length)
        console.log(this.employees)
    }

    getEmployees(){
        return this.employees;
    }
}

let department = new Department("a1", "Accounting");
console.log(department)

let departmentCopy = { describe: department.describe };
// let departmentCopy = { name: 'HR',describe: department.describe };

// departmentCopy.describe();
//By binding the current function, we can change the params and the context that this function is expected to receive
departmentCopy.describe.bind(department)();

department.addEmployee('David');
department.addEmployee('Maria');

department.getEmployees()[2] = 'Don';

department.printEmployees();

class ItDepartment extends Department {
    constructor(id: string){
        super(id, 'ITDepartment');
    }
}

class AccountingDepartment extends Department {
    constructor(id:string, public reports: string[]){
        super(id, 'Accounting');
    }

    addEmployee(employee: string): void {
        if(employee === 'John'){
            return;
        }else{
            // If the employees variable keeps being private, this is the way of accessing it
            // super.getEmployees().push(employee);
            // super.addEmployee(employee);
            // Once switched to protected, we can change it to aceess by the child class
            this.employees.push(employee);
        }
    }

    addReport(report: string){
        this.reports.push(report)
    }

    printReports(){
        console.log(this.reports)
    }
}

const it = new ItDepartment('d1')
it.addEmployee('Jhon')
console.log(it)

const accounting = new AccountingDepartment('a1', [])
accounting.addEmployee('Marcus');
accounting.addReport('Something went wrong');
accounting.printEmployees()
console.log(it)