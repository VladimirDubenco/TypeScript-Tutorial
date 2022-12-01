class ReadOnly {
    //example of access modifier
    // public firstName: string;
    // private age: number;

//example of readonly constructor

    constructor(public firstName: string,private readonly age: number){}

    printName(){
        console.log(`Your name is ${this.firstName} and you are ${this.age} years old`);
    }
}

const readOnly = new ReadOnly('Junior', 30);

//we can change 'firstName' because of modifier is public
readOnly.firstName = 'Vladimir';

//we cannot change 'age' because of modifier is private

readOnly.printName();
