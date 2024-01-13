//Singleton -made by constructors
//Object.create   //creation of object -through constructor

//Object literals
const jsUser={
    name:"Pratik", //key-value ,it is taking as String whole value
    "Full Name":"Pratik Bhabad",
    age:21,
    Location:"Pune",
    email:"prat123@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Friday"]
}

console.log(typeof(jsUser.isLoggedIn));
//object access
console.log(jsUser.Location);
console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);//for such type this method only useful

//Symbol adding to object 
const mySymbol=Symbol("key1");
const mySymbol2=Symbol("key@")

const anotherObj={
    name:"prachi",
    mySymbol:"Virgo",
    [mySymbol2]:"Leo"//for taking it as a Symbol u should use square bracket around symbol variable
}

console.log(anotherObj.mySymbol);//showing inside of object
console.log(typeof anotherObj.mySymbol);//taking as a String not a Symbol
console.log(anotherObj[mySymbol2]);//for accessing the symbol this method is useful only
console.log(typeof(anotherObj[mySymbol2]));

anotherObj.name="pratiksha";//value change inside object
console.log(anotherObj.name);
//Object.freeze(anotherObj);//this make object freeze make no changes in object
anotherObj.name="shanti"//name will not change due to freeze
console.log(anotherObj.name);
console.log(anotherObj);

anotherObj.greeting=function()
{
    console.log("hello, You are very Kind..");
}

console.log(anotherObj.greeting);
//console.log(anotherObj[greeting]);//this statement giving error due to bracket used for access
//console.log(anotherObj.greeting());//giving undefined

anotherObj.greeting2=function()
{
    console.log(`hello, You are very Kind..,${this.name}`);//this is called interpolation
}

console.log(anotherObj.greeting());
console.log(anotherObj.greeting2());

//maximum time access through dot and 