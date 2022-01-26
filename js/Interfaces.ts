
//Both of the following 2 ways of declaring interfaces and types like functions to be declared
//implemented are valid and are the same
type addFn = (a:number, b:number) => number;

interface addFn1 {
    (a:number, b:number) : number;
}

//implementing those interfaces and types with a function
var add: addFn = (x:number, y:number) => {
    return x + y;
};

var add: addFn1 = (x:number, y:number) => {
    return x + y;
};


interface IName {
    //We can have constants as well in interfaces
    readonly name: string;
    //When a parameter is optional, typescript does not complain about that
    readonly optionalName?: string;
}

//we can extend multiple interfaces as well
interface IPerson  extends IName {
    age: number;
    occupation?: string;
    hello(phrases: string):void;
}

//we can extend multiple interfaces as well but we will need to implement both of them, but we can extend only one class
// class Person implements IPerson, IName {
class Person implements IPerson {

    //Dealing with optional parameters, are marked with ? and are positioned in the constructor
    //In the last positions
    constructor(public name: string, public age: number, public occupation?: string){
    }

    hello(phrases: string):void {
        console.log(phrases + this.name);
    }

    greet() {
        console.log('Greeting');
    }
}

let david: Person = new Person('David', 26, 'Developer');
let nick: Person = new Person('Nick', 46);
david.hello('Hi ');
david.greet();

//THESE ARE OBJECTS IMPLEMENTING THE INTERFACE

// let leelaPerson: IPerson = {
//     name: 'Leela',
//     age: 30,
//     occupation: 'Instructor',
//     hello(phrases: string):void {
//         console.log(phrases + this.name);
//     }
// }

// let davidPerson: IPerson = {
//     name: 'David',
//     age: 26,
//     occupation: 'developer',
//     hello(phrases: string):void {
//         console.log(phrases + this.name);
//     }
// }