
//const coding=["js","ruby","java","cpp","python"];

// const values=coding.forEach((item)=>{
//     //console.log(item);
//     return item
// })

// console.log(values);//here for each not return value

const num=[1,2,3,4,5,6,7,8,9,0];

//const newNum=num.filter((i)=>i>5)//if there is no curly braces after arrow mark

// const newNum=num.filter((i)=>{//if there is curly braces there is need of return keyword
//     return i >4
// })

//console.log(newNum);

// const newNums=[]

// num.forEach((i)=>{
//     if(i>4)
//     {
//         newNums.push(i)
//     }
// })

// console.log(newNums);


const books=[
    {title:"book1",ganre:"fiction",edition:"2004"},
    {title:"book2",ganre:"fiction2",edition:"2003"},
    {title:"book3",ganre:"fiction",edition:"2005"},
    {title:"book4",ganre:"fiction4",edition:"2002"},
]

const userbook=books.filter((bk)=>bk.ganre === 'fiction')

const userBook=books.filter((bk)=>{
    return bk.edition >=2000
})
//console.log(userbook);
console.log(userBook);









