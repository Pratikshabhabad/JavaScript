// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }
// //console.log(i);//outside thats why giving error


// for(let i=0;i<=10;i++)
// {
//     if(i==5)
//     {
//         console.log("5 is best");
//     }
//     console.log(i);
// }




// for(let i=1;i<=10;i++)
// {
//     console.log(`outer loop: ${i}`);
//     for(let j=1;j<=10;j++)
//     {
//         console.log(`inner loop: ${j}`);
//     }
// }



let array=["Ak","sunny","srk","salman","amitabh"]

for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}


//break and continue

for(let i=1;i<=20;i++)
{
    if(i==5)
    {
        console.log("detected 5");
        break;
    }
    console.log("value of i",i);

}

for(let i=1;i<=20;i++)
{
    if(i==5)
    {
        console.log("5 detected");
        continue;
    }
    console.log("value of i",i);
}


