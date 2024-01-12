const myArr=[0,1,2,3,4,5];//cann be mixed

const myHeros=["vijay","dhanush","aalu Arjun"];

const arr=new Array(1,2,34,5);//method of Array Declaration

console.log(arr[2]);

//methods
console.log(myArr);
myArr.push(100);//adding element to the Array
console.log(myArr);

arr.pop();//poping out last element
console.log(arr);

arr.unshift(0);//Adding element at start at left
console.log(arr);


myArr.shift();
myArr.shift();//left element get reomove twice
console.log(myArr);

console.log(myHeros.includes("vijay"));

console.log(myHeros.indexOf("anu"));


const newArr=myArr.join();
console.log(myArr);
console.log(typeof myArr);
console.log(newArr);
console.log(typeof newArr);


//Slice ,Splice


console.log("A",myArr);
const myn1=myArr.slice(1,4);//not include last renge
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,4);//include renge
console.log("C",myArr); 
console.log(myn2);

