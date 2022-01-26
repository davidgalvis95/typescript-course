interface IPerson {
    name: string;
    age: number;
    occupation: string;
    hello(phrases: string):void;
}

class Person implements IPerson {

    constructor(public name: string, public age: number, public occupation: string){
    }

    hello(phrases: string):void {
        console.log(phrases + this.name);
    }

    greet() {
        console.log('Greeting');
    }
}

let david: Person = new Person('David', 26, 'Developer');
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