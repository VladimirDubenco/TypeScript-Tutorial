let myFruit: never;

// not allowed
// myFruit = 55

// type never is usually used with functions

function alwaysProcessing(): never {
    while(true) {
        console.log('I am processing...');
    }
}

function throwAnException(message: string): never{
    console.log(message);
    throw new Error();
}

throwAnException('exception occurred! ');