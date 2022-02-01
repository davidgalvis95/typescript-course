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

