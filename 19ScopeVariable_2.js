function one()
{
    const userName="prat"

    function two()
    {
        const website="Youtube"
        console.log(userName);
    }
// console.log(website);

// two() //if i didn't call to this then funtion two won't be work

}

one()



if(true)
{
    const user="panu"

    if(user==="panu")
    {
        const website="youtube"
       // console.log(user+" "+website);//it will run
    }
    //console.log(website);//will give error because of scope problem
}

//console.log(user);//will give error because of scope problem


//______________________________INTRESTING_______________________________

console.log(addOne(5));//this will run 
function addOne(value)
{
    console.log("****");
    return value+1
}

//console.log(addOne(5));


//console.log(addTwo(5));//this will not run
const addTwo=function(num)// Sometime called Expression --second type of function
{
    return num+2
}

console.log(addTwo(5));







