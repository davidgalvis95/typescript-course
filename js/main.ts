// To convert a ts file into a js file use this command:
// tsc file.ts
console.log("Hi im typescript")

//Typescript types:
//Number, String, Boolean

//to compile ts code just make tsc file.ts
function add(n1:number, n2:number) {
    return n1 + n2
}

const n1:number = 5
const n2:number = 3
console.log(add(n1,n2))

let person: {
    name: string;
    age: number;
    favoriteColors:string[];
    role: [number, string]
} = {
    name: "David",
    age: 26,
    favoriteColors:["red","blue"],
    // This is a tuple
    role: [1, "Hello"]
}

person.role[0] = 5;
person.role[1] = "Something";

//This should not work, but typescript ignores it
person.role.push("sdfdsf")

console.log(person.name)
for(let color of person.favoriteColors){
    console.log(color.toUpperCase())
}

//This is an enum
enum ROLES {
    //We can assign the type we want here
    ADMIN = 'admin',
    AUTHOR = 'author',
    USER = 'user'
}

let person1: {
    name: string;
    age: number;
    favoriteColors:string[];
    role: ROLES
} = {
    name: "David",
    age: 26,
    favoriteColors:["red","blue"],
    // This is a tuple
    role: ROLES.ADMIN
}

if(person1.role === ROLES.ADMIN){
    console.log("is an admin")
}

//This is the any type 
const anyArray: any[] =[];

anyArray.push(person1)
anyArray.push("sdfsf")
anyArray.push(5)

//This is known as the union type in typescript
function combine(input1: string | number, input2: string | number){
    let result;

    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString()
    }
    return result;
}

let result = combine('Leela', 'Leela')
console.log(result)