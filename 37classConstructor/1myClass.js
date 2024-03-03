//after ES6

class User{
    constructor(username,email,pass)
    {
        this.username=username;
        this.email=email;
        this.pass=pass
    }

    encrptPass()
    {
        return `${this.pass}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const chai=new User("prat","prat@gmail.com",123)
console.log(chai.encrptPass());
console.log(chai.changeUsername());


//behind the scene

// function User(username,email,pass){
//     this.username=username;
//     this.email=email;
//     this.pass=pass
// }

// User.prototype.encrptPass=function(){
//     return `${this.pass}abc`;
// }

// User.prototype.changeUsername=function()
// {
//     return `${this.username.toLowerCase()}`
// }

// const Tea=new User("PrANU","panu@gmail.com","12345")
// console.log(Tea.encrptPass());
// console.log(Tea.changeUsername());