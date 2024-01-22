//Arrow functions

const user={
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to Website`);//this refer to [only block of user] current context

        console.log(this);//all include user
    }
}

user.welcomeMessage()

user.username="sam";
user.welcomeMessage();

console.log(this);// refers empty



function chai()
{
    name:"prat"
    console.log(this.name);//undefined
}


// chai();
//this not works in function eg.chai()

const chai1=function(){
    let username="pratiksha"
    console.log(this.username);
}

//chai1()//this will give also undefined

const chai2=()=>{///this is the function i.e arrow function
    let username="pratik"
    console.log(this.username);//this will not work and output will return undefined
}

// chai2()



//Arrow Function
// function can hold in variable
//you can also pass parameter


const addTwo=(num1,num2)=>{
    console.log(" I entered here");
    return num1+num2;
}

//addTwo(3,4);//this will go in function and print statement it won't return sum
console.log(addTwo(10,20));


//Implicit return function-there is no use of curly bracket and return word
const subtwo=(num1,num2)=> num1-num2 
//with curly braces return keyword is imporatant
const mulTwo=(num1,num2)=> (num1*num2) 
console.log(subtwo(5,9));
console.log(mulTwo(5,9));

const addOne=(num1,num2)=>({username:"pratik"})
console.log(addOne());

//Explicit return means use of return  keyword




