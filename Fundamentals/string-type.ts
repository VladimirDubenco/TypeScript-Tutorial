function sayHello(name: String){
    console.log(`Hello ${name}`);
}

let myName: String;

myName = 'Single quotes';
sayHello(myName);
myName = 'Double quotes';
sayHello(myName);
myName = `Back ticks`;
sayHello(myName);

console.log(myName);
