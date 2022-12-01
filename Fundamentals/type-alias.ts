type ID = number | string;

let customerId: ID;

customerId = 99;
console.log(customerId);

customerId = 'JKI99';
console.log(customerId);

type Rectangle = {length: number, name: string};
let myRoom: Rectangle;
myRoom = {length: 88, name: 'Living room'};
console.log(myRoom);
