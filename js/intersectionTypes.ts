type Admin = {
    name: String;
    roles: string[];
}

type Employee = {
    name: String;
    startDate: Date;
}

//This takes both properties of the both declared objects 
type SuperEmployee =  Admin & Employee;

let emp: SuperEmployee = {
    name: 'David',
    roles: ['admin'],
    startDate: new Date()
}

interface Admin1 {
    name: String;
    roles: string[];
}

interface Employee1 {
    name: String;
    startDate: Date;
}

interface SuperEmployee1 extends Admin1, Employee1 {};

//This takes both properties of the both declared objects 
let emp1: SuperEmployee1 = {
    name: 'David',
    roles: ['admin'],
    startDate: new Date()
}

type combinable = number | string;
type combinable1 = number | boolean;

type universal = combinable & combinable1;
