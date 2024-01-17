let a=300
if(true){//block scope
let  a=10;// value can't get outside-limited only block scope
const b=20;//value can't get outside
var c=30;// work out side
console.log(a+" Inner value");

}
//global scopes

console.log(a);
//console.log(b);
console.log(c);

//{}-scope











