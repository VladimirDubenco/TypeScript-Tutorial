class Person {
    public firstName: string;
    private age: number;
    constructor(firstName: string, age: number){
        this.firstName = firstName;
        this.age = age;
    }

    printName(){
        console.log(`Your name is ${this.firstName} and you are ${this.age} years old`);
    }
}

const junior = new Person('Junior', 30);

//we can change 'firstName' because of modifier is public
junior.firstName = 'Vladimir';

//we cannot change 'age' because of modifier is private

junior.printName();
