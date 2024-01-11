//Dates;

let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());//provide date +day
console.log(myDate.toTimeString());//time +timeZone
console.log(myDate.toLocaleDateString());//date in local format date/month/year
console.log(myDate.toLocaleTimeString());//time with second + with am/pm

console.log(typeof(myDate));

let newDate=new Date(2023,0,3);//day and all information / month start from 0-jan ,1-feb...
console.log(newDate.toDateString());

let d=new Date("2023-4-12");
console.log(d.toLocaleString());


let timeStamp=Date.now();
console.log(timeStamp);
console.log(d.getTime());
console.log(Math.round(Date.now()/1000));


let newdate=new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
    
})










