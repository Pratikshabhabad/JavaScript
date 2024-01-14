//Functions are code close in package and you can use it whenever ,wherever, and it is use repeatedly


function sayName()//creation of function
{
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("t");
}

sayName()//reference of function
sayName()//code reusability



function addTwoNum(num1,num2)
{
    console.log(num1+num2)

}

addTwoNum();//without Argument will not give output and give NAN
addTwoNum(4,3)//argumented
addTwoNum(4,"3")//print as string-43
addTwoNum(3,"a")//3a
addTwoNum(4,null)

const result=addTwoNum(3,4);
console.log("result: ",result);//undefined


function addTwoNum1(num1,num2)
{
    let result1=num1+num2

    //return result1;
    return num1+num2
}
const ans=addTwoNum1(4,5);
console.log(ans);


function loginUserMessage(username)
{
    return `${username} just logged in`
}

const result3=loginUserMessage("pratik")//when you not pass argument it will print undefined

console.log(result3);

function loginUserMessage1(username="sam")//name given optionally 
{
if(username===undefined)
{
    console.log("please enter username");
    return
}

    return `${username} just logged in`
}


const result4=loginUserMessage1();
console.log(result4);







