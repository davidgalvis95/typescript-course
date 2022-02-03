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
function Component(template:string, hookId: string){
    console.log("Template factory");
    //Here we are receiving the constructor from the class User which holds a property name
    return function(constructor:any){
        const hookEl = document.getElementById(hookId);
        console.log("inside template decorator")
        //Here we are creating a new instance of that data that in our case is the User class, which
        //hence the property name is created
        const data = new constructor();
        if(hookEl){
            //Assigning the innerHTML as the passed template, in this case: <h1>Hai</h1>
            hookEl.innerHTML = template;
            //selecting the h1 inside that div and changing the text by the name of the data, in this case the class User
            hookEl.querySelector('h1')!.textContent = data.name;
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
    name:string = 'User'
    constructor(){
        console.log('creating object');
    }
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

//We can also apply decorators for accessors(getters and setters), methods and method parameters, please look at the typescript docs