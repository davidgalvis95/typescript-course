interface IName {
    //We can have constants as well in interfaces
    readonly name: string;
}

//we can extend multiple interfaces as well
interface IPerson  extends IName {
    age: number;
    occupation: string;
    hello(phrases: string):void;
}

//we can extend multiple interfaces as well but we will need to implement both of them, but we can extend only one class
// class Person implements IPerson, IName {
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