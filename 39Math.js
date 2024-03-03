//Object.getOwnPropertyDescriptor-with help of this u can make change in properties
//can pi value can change and why ?for both cases 1)yes 2) no
console.log(Math.PI);

Math.PI=4;
console.log(Math.PI);

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);//output  below
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


const chai={
    name:"kadakChai",//properties
    price:280,
    isavailbale:true
}
// console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,"name",{writable:false,
// enumerable:false,
// configurable:false})


for (let [key,value] of Object.entries(chai)) {
    console.log(`${key}:${value}`);
}




const tea={
    name:"kadakChai",//properties
    price:280,
    isavailbale:true,
    orderTea:function(){//this not want thats why use if
console.log("not good");
    }
}


Object.defineProperty(tea,"name",{writable:false,
    enumerable:false,//if it is false then some part not iterate in loop
    configurable:false})

for (let [key,value] of Object.entries(tea)) {
    if(typeof value!='function')
    {
        console.log(`${key}:${value}`);
    }
  
}