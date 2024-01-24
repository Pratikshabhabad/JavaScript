const userEmail=""//false

//falsy Values
//false,0,-0,BigInt-0n,"",null,undefined, Nan

//Truthy value-other than falsy value and also below values 
//"0",'false'," "-here space is given,[],{},function(){}



if(userEmail)
{
    console.log("got mail");
}
else{
    console.log("dont have mail");
}
//check array is empty or not 
const arr=[]
if(arr.length===0)
{
    console.log("array is empty");
}

//empty objects checking
const myobj={}
//Object.keys() -this will create array of obj 
if(Object.keys(myobj).length===0)
{
    console.log("yes i am empty");
}
//***************keep this in mind*************/

if(false==0)
{
    console.log("means value is true");
}

if(false=='')
{
    console.log("means value is true");
}
if(''==0)
{
    console.log("means value is true");
}


//Nullish coalescing operator(??): null undefined  different from ternery operator
let val1;
val1=5 ?? 10
console.log(val1);
val1=null ?? 10
console.log(val1);
val1=undefined ?? 15
console.log(val1);
val1=null ?? 10 ?? 15
console.log(val1);//first value will assign  after null



//Terniary operator

const iceTeaPrice=100

iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80");;
