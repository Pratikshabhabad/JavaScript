const number=300;
console.log(number);

const balance=new Number(400);//specifically define number
console.log(balance);


console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num=231.7689
console.log(num.toPrecision(3));
console.log(num.toPrecision(4));

const hundreds=10000000
console.log(hundreds.toLocaleString());//by default us standard add comma to zeros
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.max(20,90));
console.log(Math.min(9,67));


//********************maths**************************


console.log(Math);
console.log(Math.abs(-4));//negative to positive
console.log(Math.round(6.54));
console.log(Math.ceil(45.2));
console.log(Math.floor(3.4));
console.log(Math.sqrt(45));


console.log(Math.random());
console.log(Math.round(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.round(Math.random()*(max-min+1))+min);//formula for renging between min=10 and max=20
