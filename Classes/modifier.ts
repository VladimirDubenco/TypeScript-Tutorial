class Modifier {
    //example of access modifier
    // public firstName: string;
    // private age: number;

//example of inline constructor
    constructor(public firstName: string,private age: number){}

    printName(){
        console.log(`Your name is ${this.firstName} and you are ${this.age} years old`);
    }
}

const modJunior = new Modifier('Junior', 30);

//we can change 'firstName' because of modifier is public
modJunior.firstName = 'Vladimir';

//we cannot change 'age' because of modifier is private

modJunior.printName();
