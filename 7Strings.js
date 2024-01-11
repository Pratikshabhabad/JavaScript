const name="Salman"
const repoCount=50

console.log(name+ " age: "+repoCount );//oldType

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);//new type

const gameName=new String('CandyCrush')
console.log(gameName);
console.log(gameName.length)
console.log(gameName.charAt(4));
console.log(gameName.concat("Saga"));
console.log(gameName.endsWith(" saga"));//case matters
console.log(name[0]);
console.log(gameName.__proto__);//it will see in console
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

const wish=new String("  hello");
console.log(wish);
console.log(wish.trim());
console.log(wish.indexOf('s'));

const another=gameName.substring(0,5);
console.log(another);

console.log(gameName.slice(3,8));

const url="http://prat.com/prat%20bhabad";
console.log(url.replace('%20','_'));
console.log(url.includes('prat'));

const variable1=new String("I am learning a java");
const arr=variable1.split(" ");
console.log(arr);
