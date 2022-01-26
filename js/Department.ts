//Abstract classes cannot be instantiated
abstract class Department {

    // private id: string;
    // public name: string;
    // private employees: string[] = []
    protected employees: string[] = [];

    // This means that the id will only be created using the constructor but not accessed any other way // this is read only
    constructor(private readonly id: string, public name: string){
        this.name = name;
        this.id = id;
    }

    get getId(): string {
        return this.id;
    }

    //Here we are forcing all the classes that implement this one to implement the describe method
    abstract describe(this: Department):void;

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

// let department = new Department("a1", "Accounting");
// console.log(department)

// let departmentCopy = { describe: department.describe };
// let departmentCopy = { name: 'HR',describe: department.describe };

// departmentCopy.describe();
//By binding the current function, we can change the params and the context that this function is expected to receive
// departmentCopy.describe.bind(department)();

// department.addEmployee('David');
// department.addEmployee('Maria');

// department.getEmployees()[2] = 'Don';

// department.printEmployees();

class ItDepartment extends Department {
    constructor(id: string){
        super(id, 'ITDepartment');
    }


    describe(this: ItDepartment){
        console.log(`Accounting department with id (${this.getId}) : ${this.name}`);
    }
}

class AccountingDepartment extends Department {

    private lastRecord: string;

    //This is a prop that belongs to the class, not to the instance
    // static financialYear = 2020;
    //This is a constant
    static readonly financialYear = 2020;

    //This is a static variable attached to the class, not to instances, so only one can exist
    private static instance: AccountingDepartment;

    //This does not make accessible the creations of instances outside of this class
    private constructor(id:string, public reports: string[]){
        super(id, 'Accounting');
        this.lastRecord = reports[0];
    }

    //If the variable instance already exists the return that one, otherwise create a new one
    //THIS IS THE SINGLETON PATTERN
    static getInstance(): AccountingDepartment{
        if(AccountingDepartment.instance){
            return this.instance;
        }
        return new AccountingDepartment('d2', []);
    }

    get mostRecentReport(){
        if(!this.lastRecord){
            throw new Error('No reports found');
        }
        return this.lastRecord;
    }

    set mostRecentReport(value: string){
        if(!value){
            throw new Error('Report cannot be inserted');
        }
        this.addReport(value);
    }

    static createEmployee(name: string): string {
        return name;
    }

    describe(this: AccountingDepartment){
        console.log(`Accounting department with id (${this.getId}) : ${this.name}`);
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
        this.reports.push(report);
        this.lastRecord = report;
    }

    printReports(){
        console.log(this.reports)
    }
}

const it = new ItDepartment('d1')
it.addEmployee('Jhon')
console.log(it)

//Both variable are pointing to the same instance, then making it singleton
const accounting = AccountingDepartment.getInstance()
const accounting1 = AccountingDepartment.getInstance()
accounting.addEmployee('Marcus');
accounting.addReport('Something went wrong');
accounting.printEmployees()
console.log(it);

AccountingDepartment.createEmployee('Some employee');
console.log(AccountingDepartment.financialYear)