//This decorator will modify the behavior of the class to which that one is assigned to
// function Logger(constructor: Function) {
//     console.log('Logging data');
//     console.log(constructor);
// }

//Here we are enabling the decorator to receive some data
function Logger(logString: string) {
    console.log("Logger factory");
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('logging some string')
class Person {
    name = 'David';

    constructor(){
        console.log('The person name is ' + this.name);
    }
}

//With this decorator we can change a bit the behavior of the User class
//The hookId in this case is the html element that holds the id="app", in this case a pair of div
//WITH THESE MODIFICATIONS THE LOGIC INSIDE THIS DECORATOR WON'T BE EXECUTED IF AN INSTANCE OF THE
//DECORATED CLASS HAS NOT BEEN CREATED
function Component(template:string, hookId: string){
    console.log("Template factory");
    //Here we are receiving the constructor from the class User which holds a property name
    //Here the constructor is of type T since we do not know the type of that constructor
    //So basically we are here saying that  the type of constructor is one that extends the function type
    //because this 'new(...args:any[]):{ name: string } ' means a function type that receives some parameters
    //and returns an object with a property name in there, so this is implemented so that it matches what we aim
    //in the return block lines below
    return function<T extends { new(...args:any[]):{ name: string } }>(constructor:T){
        return class extends constructor {
            //The constructor received here is of any type
            constructor(...args: any[]){
                super(args);
                //executing some logic
                const hookEl = document.getElementById(hookId);
                //Here we are creating a new instance of that data that in our case is the User class, which
                //hence the property name is created
                if(hookEl){
                    //Assigning the innerHTML as the passed template, in this case: <h1>Hai</h1>
                    hookEl.innerHTML = template;
                    //selecting the h1 inside that div and changing the text by the name of the data, in this case the class User
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

//When dealing with multiple decorators, the decorators, it means the inner functions of the functions are
//are executed bottom up the
//while the functions external calls are executed top down
@Logger('logging some string')
//Decorator for the User class
@Component('<h1>Hai</h1>', 'app')
class User {
    name:string = 'David'
    constructor(){
        console.log('creating object');
    }

    getPrice() {}
}

function Log(target:any, propertyName:string){
    //This will print the entire prototype of the decorated class, in this case the Product one
    console.log(target);
    //This will print the name of the decorated property
    console.log(propertyName);
}

//If we apply the decorator at the class level we will get the constructor function
//but if we apply in a property we get the prototype and the property name
class Product {

    @Log
    title:string;
    private _price: number;

    constructor(title:string, price:number){
        this._price = price;
        this.title = title;
    }

    set price(value: number){
        if(value<0) {
            this._price = value;
        }else{
            throw new Error('Price is less than 0');
        }
    }

    getPriceWithTax(tax: number){
        return this._price * (1 + tax);
    }
}

const user:User = new User();
console.log(user)

//We can also apply decorators for accessors(getters and setters), methods and method parameters, please look at the typescript docs