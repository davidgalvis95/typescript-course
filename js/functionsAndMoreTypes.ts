//Typescript also supports function overloading
const userData = {
    name: 'David',
    job: {
        title:'CEO',
        description:'My Company'
    }
}

console.log(userData?.job?.title);

const userInput1 = null;
const userInput2 = '';

//If the storedData2 is null or undefined then return the DEFAULT value
const storedData1 = userInput1 ?? 'DEFAULT';
//If the storedData2 is empty, null, undefined then return the DEFAULT value
const storedData2 = userInput2 || 'DEFAULT';


//This is like saying Array<T> too
let names: Array<string> = [];

let promise: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('Some string over here');
    }, 2000)
})

promise.then((data) => {
    data.split('');
})


//Creating a generic type function
//This is also constraining it to extend object
function merge<T, U extends object>(objA: T, objB:U){
    return Object.assign(objA, objB);
}

//To use that generic type and specify the types we are gonna send to that one we need to Specify
//them following the next convention
const data = merge<{name: string}, {age: number}>({name: 'David'}, {age: 34});

console.log(data.age);

interface Lengthy {
    length: number;
}

//This means that any type that extends Lengthy interface can execute this functions
//In this case en element that extends Lengthy is a type of object that has the length property in it
//Since Lengthy already has a length property
function getCountAndDescribe<X extends Lengthy>(element: X):[X, string]{
    let text = 'Go no element';

    if(element.length === 1){
        text = 'Got 1 element';
    }

    if(element.length > 1){
        text = 'Got ' + element.length + ' elements';
    }

    return [element, text];
}

//Here a string can execute it, since it has the length property that Lengthy has
console.log(getCountAndDescribe('Some string'))

//This means that the name of the U key that is passed to this function should be present in the object T
function extractFromObject<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key];
}

extractFromObject({name: 'David', age: 30}, 'age');