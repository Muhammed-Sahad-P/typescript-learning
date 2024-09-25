//! Generics
//* Generics are used to create reusable components that can accept different types of data.
//<T>, <T extends string | number>, <T extends {}>, <T extends {name: string}> here <T> is generic used to create reusable components that can accept different types of data.

function getAge<T>(age: T): T {
    return age;
}

getAge<string>("sachin");
getAge<number>(25);


type UserDetails = {
    name: string;
    age: number;
};

type AdminDetails = {
    name: string;
    role: string;
};

const userDetails = {
    name: "sahad",
    age: 25
}

const adminDetails = {
    name: "admin",
    role: "admin"
}

function getDetails<T>(details:T):T {
    return details
}

const userValue = getDetails<UserDetails>(userDetails);
const adminValue = getDetails<AdminDetails>(adminDetails);

userValue.name
adminValue.role

// we can also pull the type of user and admin from the function 

function getDetails2<T extends {name:string}>(details:T):T {
    return details
}

type User = {
    name: string;
    age: number;
};

//here merged type of user and admin with &
type Admin = User & {
    role: string;
};

const userValue2 = getDetails2<UserDetails>(userDetails);   
const adminValue2 = getDetails2<AdminDetails>(adminDetails);

userValue2.name
adminValue2.role


