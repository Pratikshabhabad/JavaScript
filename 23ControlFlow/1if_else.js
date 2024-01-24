//control-flow
//1)if

if(false)//condition is true- it will execute the block
{
    console.log("i am ready");
}

//== ->check equality of value
if(2=="2")
{
    console.log("Done");
}

//===-triple euqal checks value as well as type

if(2==="2")
{
    console.log("Done");//no execution here
}

//2)if-else
const temp=41
if(temp===41)
{
    console.log("temp is less than 50");
}
else{
    console.log("temp is greater than 50");
}

console.log("hit the code");


const score=200
if(score>100)
{
    const power="fly"
  //  var superhero="Dhanush"
    console.log(`User power: ${power}`);
   // console.log(`User power: ${superhero}`);
}

//  console.log(`User power: ${power}`);//this line gives because of scope problem
//console.log(`User power: ${superhero}`);//this will execute because var scope is completely global


//short hand notation
 const balance=1000
 if(balance>500)console.log("you are rich");


//3) if-else-if ladder
if(balance<500)
{
    console.log("less than 500");
}
else if(balance<750)
{
    console.log("less than 750");
}
else if(balance<900)
{
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}


const userlogin=true
const debit=true
const GoogleLoggedIn=false
const EmailLoggedIn=true
if(userlogin && debit && 2==3){
    console.log("Allow to buy course");
}

if(EmailLoggedIn || GoogleLoggedIn){
    console.log("you are log in");
}













