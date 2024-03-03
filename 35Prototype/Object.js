function one(num){
    return num*5;
}

one.power=3
console.log(one(5));//25
console.log(one.power);//2
console.log(one.prototype);//{}

function createUser(username,score){
    this.username=username
}

createUser.prototype.increment=function()
{
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}

const chai=new createUser("chai",45)
const tea=createUser("tea",23)
chai.printMe()