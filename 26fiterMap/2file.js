const myNum=[1,2,3,4,5,6,7,8,9,10]

const num=myNum.map((i)=> i+10)

const newNum=myNum.map((n)=>n*10).map((i)=>i+1).filter((n)=>n>=40)

console.log(newNum);