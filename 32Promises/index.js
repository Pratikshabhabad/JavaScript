//1)creation of promise
const promiseOne=new Promise(function(resolve,reject){
    //do an asyn task
    //db calls ,cryptography ,network related work

    setTimeout(function(){
        console.log("Async task is complete")
        resolve()//because of this promise consumed works
    },1000)

})//resolve is conneted to then
//Q and bluebird libraries use instead of promises in early time


//2)consume promise
promiseOne.then(function(){
    console.log("promisse consumed");
})


///---------------------------------------
///promise created in one function
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async Task2");
        resolve();

    },1000)
}).then(function(){
    console.log("async 2 resolved")
})
//-----------------------------------------------
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"prat@gmail.com"})
    })
})

promiseThree.then(function(obj){
    console.log(obj);
})

//--------------------------------use of reject
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;//if here is true then it will print error
        if(!error)
        {
            resolve({username:"pratiksha4493",password:"123"})
        }
        else{
            reject("Error:something went wrong")
        }

    },2000)
})

// const username=promisefour.then((user)=>{
//     console.log(user);
//     return user.username
// })

// console.log(username);//this is not work this will give error because of variable const username

promisefour.then((user)=>{
    console.log(user);
    return user.username
})
.then((myusername)=>{
    console.log(myusername);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("promise is either resolve or reject");
})
//-----------------------------------
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;//if here is true then it will print error
        if(!error)
        {
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject("Error:js went wrong")
        }

    },1000)
});

async function consumePromiseFive(){
try {
    const response=await promiseFive
    console.log(response);
} catch (error) {
    console.log(error);
}
}

consumePromiseFive()


/////-----------------------------------------------------------

async function getAllUser(){
 try {
    const response=await fetch("https://api.github.com/users/pratikshabhabad")
    //console.log(response);
    const data= await response.json()
    console.log(data);
 } catch (error) {
    console.log(error);
 }
}

//getAllUser()

///-------------------------above function without trycatch
fetch("https://api.github.com/users/pratikshabhabad").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})