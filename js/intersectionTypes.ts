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

type unknownEmployee = Admin1 | Employee1;

function printEmployeeInfo(emp: unknownEmployee){

    if('roles' in emp) {
        console.log('roles: ' + emp.roles);
    }

    if('startDate' in emp) {
        console.log('startDate: ' + emp.startDate);
    }
}

class Car {
    drive() {
        console.log('driving car...');
    }
}

class Truck {
    drive() {
        console.log('driving truck...');
    }

    loadingCargo(amount: number) {
        console.log('loading cargo: ' + amount);
    }
}

type vehicle = Car | Truck;

function useVehicle(veh: vehicle) {
    console.log(veh.drive());

    if(veh instanceof Truck) {
        console.log(veh.loadingCargo(30));
    }
}

const v1 =  new Car();
const v2 =  new Truck();

useVehicle(v1);
useVehicle(v2);