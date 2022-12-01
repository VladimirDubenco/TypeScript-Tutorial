
// 
enum Role {
    ROLE_USER,
    ROLE_ADMIN,
    ROLE_SYS
}

let user: {name: string, role: Role};

user = {name: 'Junior', role: Role.ROLE_USER};
//automatically assign index to enums
console.log(user);

//we can obtain enum with custom index

enum Permission {
    PERMISSION_USER = 5,
    PERMISSION_ADMIN,
    PERMISSION_SYS
}
let permission: Permission = Permission.PERMISSION_SYS;

console.log('Permission: ' + permission);

// we can also reindex with strings

enum Role_Permission {
    ROLE_PERMISSION_USER = 'p_user',
    ROLE_PERMISSION_ADMIN = 'p_admin',
    ROLE_PERMISSION_SYS = 5
}
let rolePermission: Role_Permission = Role_Permission.ROLE_PERMISSION_SYS
console.log(rolePermission);
rolePermission = Role_Permission.ROLE_PERMISSION_ADMIN;
console.log(rolePermission)