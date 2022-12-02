
// use T&V to merge types
function updateUser<T,V>(oldUser: T, newUser: V): T&V {
    return {...oldUser, ...newUser}
}


function makeAdmin<T>(user: T): T {
    return { ...user, admin: true}
}


let user1 = { name: 'Junior'};
let user2 = {age: 25, gender: 'M'};

console.log(updateUser(user1, user2));
console.log(makeAdmin(user2));