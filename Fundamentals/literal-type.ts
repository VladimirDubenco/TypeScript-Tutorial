let userType: "USER" | "ADMIN";

// not allowed
//userType = 'ADMINa'

userType = 'ADMIN';

function saveUser(userId: number, type: 'USER'| 'ADMIN'): void {
    if (type === 'USER'){
        console.log(`Saving new user: \n ${userId}, ${type}`)
    } else {
        console.log(`Saving new admin: \n ${userId}, ${type}`)
    }
}

saveUser(10, 'USER');
saveUser(20, "ADMIN");

type BINARY = 0 | 1;

let clientId: BINARY;
// not allowed
// clientId = 3
clientId = 1;
console.log(clientId);