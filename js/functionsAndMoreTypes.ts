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


class DataStorage<T> {
    public data: Array<T> = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const stringStorage = new DataStorage<string>();
stringStorage.addItem('dsfdsf');
stringStorage.addItem('dfsdfdd');
stringStorage.getItems();
stringStorage.removeItem('dsfdsf');

interface course {
    title: string;
    description: string;
    addedDate: Date;
}

function addCourse(
    title: string, description: string, addedDate: Date
): course {
    
    //If we add this as only data then we will need to assign the properties of that type of data to
    //In this case the course type. otherwise we will get an error, the other way is to create it as partial one
    // let data: course = {};
    let data: Partial<course> = {};
    

    data.title = title;
    data.description = description;
    data.addedDate = addedDate;

    //Since we are requiring this function to return a course but we are not returning the course
    //Then we are getting error, but to return the object from a partial object just we need to cast it
    // return <course>data;
    return <course>data;
}


let strings: Readonly<string[]> = ['dfsdf', 'dsfsdfd'];
//We cannot push since the variable was declared as readonly
// strings.push('dfsfsddd');

