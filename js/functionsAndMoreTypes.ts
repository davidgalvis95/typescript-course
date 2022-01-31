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
