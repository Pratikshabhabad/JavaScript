//Javascript Execution Context
//1-Global EC-allocate in -this keyword-execute in thread
//2-Function/Functional EC 
//in mongoose 3-Eval EC

//js code run in two phase -1)Memory Creation Phase- memory alloacte to varible  2)Execution  phase-execute operation such as addition ,subtraction


//how code will excute 
//1)Global E -allocate in this keyword

let val1=10//2) memory phase -> val1=undefined ,val2=undefined
let val2=5
function addNum(num1,num2)//2) addnum=all definition i.e. all code enclosed in curly bracket
{
    let total=num1+num2
    return total
}

let result1=addNum(val1,val2)//2) result1=undefined
let result2=addNum(20,5)//2) result2=undefined

//3)-execution phase- val1=10 val2=5                        \|/----------------------|
//addNum-> reult1->addNum->new Box Creation called new execution context->new Variable environment+execution thread---->again 2) 3) phase repeat
//3)-1-Memory phase-val1=undefined,val2=undefined,total=undefined                    |
//3)-2 Execution phase-num1=10/val1, num2=5/val2, total=15  ,result1=15--->return to global ec    
//after work of new execution context it get delete----------------------------------|
//we go to line 21 for its excution same as upper


//Call Stack-stack is similar to we use in dsa
//1) at based-global Execution context 
//2)method and all 
//concept use is -LIFO -last in first out














