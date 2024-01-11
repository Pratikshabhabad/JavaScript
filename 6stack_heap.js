//stack MEmory - (primitive)
// heap-(Non-primitive)

let variable="myString";

let anotherVar=variable

console.log(anotherVar);
anotherVar="ChaiAurCode"
console.log(anotherVar);
console.log(variable);


let UserOne ={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo=UserOne

userTwo.email="amdoc@gmail.com"

console.log(UserOne.email);
console.log(userTwo.email);