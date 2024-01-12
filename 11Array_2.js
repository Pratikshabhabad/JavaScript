const a=[1,2,3,4,5];
const b=[6,7,8,9];

//a.push(b);//Array inside array,so this method is not useful so "concat" is anothrr

console.log(a);//[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9 ] ]

const c=a.concat(b);//all element in one array in new locations
console.log(c);

const ArrayEle=[...a,...b];//do seperate element(spread operator)
console.log(ArrayEle);

const anotherArr=[1,2,3,[4,5,6],7,[8,9,[5,7]]];

const real=anotherArr.flat(Infinity);//depth=infinity means array in array ,and it will make only one array like simple array

console.log(real);


console.log(Array.isArray("Hitesh"));

console.log(Array.from("Hitesh"));//it will make Array to anything

console.log(Array.from({name:"Hitesh"}))//intresting

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));