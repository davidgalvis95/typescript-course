"use strict";
// To convert a ts file into a js file use this command:
// tsc file.ts
console.log("Hi im typescript");
//Typescript types:
//Number, String, Boolean
//to compile ts code just make tsc file.ts
function add(n1, n2) {
    return n1 + n2;
}
const n1 = 5;
const n2 = 3;
console.log(add(n1, n2));
let person = {
    name: "David",
    age: 26,
    favoriteColors: ["red", "blue"],
    // This is a tuple
    role: [1, "Hello"]
};
person.role[0] = 5;
person.role[1] = "Something";
//This should not work, but typescript ignores it
person.role.push("sdfdsf");
console.log(person.name);
for (let color of person.favoriteColors) {
    console.log(color.toUpperCase());
}
//This is an enum
var ROLES;
(function (ROLES) {
    //We can assign the type we want here
    ROLES["ADMIN"] = "admin";
    ROLES["AUTHOR"] = "author";
    ROLES["USER"] = "user";
})(ROLES || (ROLES = {}));
let person1 = {
    name: "David",
    age: 26,
    favoriteColors: ["red", "blue"],
    // This is a tuple
    role: ROLES.ADMIN
};
if (person1.role === ROLES.ADMIN) {
    console.log("is an admin");
}
//This is the any type 
const anyArray = [];
anyArray.push(person1);
anyArray.push("sdfsf");
anyArray.push(5);
var RESULT_TYPES;
(function (RESULT_TYPES) {
    RESULT_TYPES["AS_TEXT"] = "as-text";
    RESULT_TYPES["AS_NUMBER"] = "as-number";
})(RESULT_TYPES || (RESULT_TYPES = {}));
//This is known as the union type in typescript
//Here we are adding literal types where we only allow certain types to be here like the ones contained in the
//In the RESULT_TYPES enum
function combine(input1, input2, resultType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultType === RESULT_TYPES.AS_NUMBER) {
        return +result;
    }
    else {
        return result.toString();
    }
}
//Here we are not returning so is void
function printResult(value) {
    console.log(value);
}
//Here we are returning nothing so is of type undefined
function printResult1(value) {
    console.log(value);
    return;
}
let result = combine('Leela', 'Leela', RESULT_TYPES.AS_NUMBER);
console.log(result);
//using the function
printResult(combine('Leela', 'Leela', RESULT_TYPES.AS_NUMBER));
//Here we are ensuring that the type which combineValues is assigned to, is a function receiving those 
//param types and returning that result type
let combineValues;
combineValues = combine;
console.log(combineValues('David', 'Galvis', RESULT_TYPES.AS_NUMBER));
let userInput;
let userName;
userInput = 5;
userInput = 'Some string';
//This will generate error because userInpur is unknown
//userName = userInput
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
function generateAPrint() {
    console.log('Printing something');
    return;
}
console.log(generateAPrint());
try {
    let result = generateError('Some error happened', 500);
    console.log(result);
}
finally {
    console.log('Error generated');
}
//The following command auto-compiles the file whenever the file inside it has been saved
//tsc <js file> --watch or tsc <js file> -w
//The following two commands will  1. Create a tsconfig.json and will auto-compile all project files
//tsc -- init
//tsc --watch
