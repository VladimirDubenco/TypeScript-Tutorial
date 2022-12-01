let customerInput: unknown; // 'unknown' type is like 'any' but permit type assertion

customerInput = 10;

customerInput = 'this is another input';

console.log(customerInput);


let customerAge: string;

// not allowed
// customerAge = customerInput;

// this will work
customerAge = customerInput as string;

if(typeof customerInput === 'string') {
    customerAge = customerInput;
}