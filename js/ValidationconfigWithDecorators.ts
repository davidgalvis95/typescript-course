interface validationConfig {
    [property: string]: {
        [validationProperty:string]:string[];
    }
}

const validatorObject: validationConfig = {}

function Required(target: any, name: string){
    console.log(target);
    const className = target.constructor.name;
    validatorObject[className] = {
        //here we are using the spread operator to append the data instead of replacing it with each value we have
        ...validatorObject[className],
        [name]:['required'],
    }
}

function Positive(target: any, name: string){
    console.log(target);
    const className = target.constructor.name;
    validatorObject[className] = {
        ...validatorObject[className],
        [name]:['positive'],
    }
}

function validate(obj: object){
    let validatorName = validatorObject[obj.constructor.name];
    if(!validatorName) {
        return true;
    }

    let isValid = true;

    for(const prop in validatorName){
        for(const validator in validatorName[prop]){
            switch (validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = obj[prop] >0;
            }
        }
    }
}

class Course {
    @Required
    title:string;

    @Positive
    price:number;

    constructor(title:string, price:number) {
        this.title = title;
        this.price = price;
    }
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const courseObj = new Course(title, price);

    if(!validate(courseObj)) {
        alert('input values are not valid');
        return;
    }

    console.log(courseObj);
})