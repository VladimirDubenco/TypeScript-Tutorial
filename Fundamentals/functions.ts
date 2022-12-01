function add(a: number, b: number):number {
    return a + b;
}

console.log(add(5,9));

let muliply = (a: number, b: number): number => a*b;

console.log(muliply(5,9));

// using parameters
function formatName1(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
};

console.log(formatName1('Junior', 'Smith'));

// '?' at the end of variable means that it is optional

function formatName2(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
};
console.log(formatName2('Junior'));

// use '=' instead of ':' to set up default value
// default parameters can be only the last one in the list of parameters
function formatName3(firstName: string, lastName = 'DEFAULT') {
    return `${firstName} ${lastName}`;
};
console.log(formatName3('Junior'));
console.log(formatName3('Junior', 'Not default'));

function printNames(firstName: string, ... allTherest: string[]) {
    return firstName + allTherest.join(' ');
}

console.log(printNames('FirstParam ', 'All', 'The', 'Rest', 'Parameters'))


//function overloading
function addValues(val1: number, val2: number):number;
function addValues(val1: string, val2: string): string;
function addValues(a: any, b: any) {return a + b}

console.log(addValues(5, 8));
console.log(addValues('Junior ', 'Kevin'))
