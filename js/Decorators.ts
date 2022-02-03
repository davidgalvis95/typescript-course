//This decorator will modify the behavior of the class to which that one is assigned to
// function Logger(constructor: Function) {
//     console.log('Logging data');
//     console.log(constructor);
// }

//Here we are enabling the decorator to receive some data
function Logger(logString: string) {
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
function WithTemplate(template:string, hookId: string){
    //Here we are receiving the constructor from the class User which holds a property name
    return function(constructor:any){
        const hookEl = document.getElementById(hookId);
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

//Decorator for the User class
@WithTemplate('<h1>Hai</h1>', 'app')
class User {
    name:string = 'User'
    constructor(){
        console.log('creating object');
    }
}

