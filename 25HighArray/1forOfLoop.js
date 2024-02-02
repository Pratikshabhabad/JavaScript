//for of loop 


const arr=[1,2,34,5,6,7,6];

for (const i of arr) {
    console.log(i);    
}


const greetings="Hello world"
for( const i of greetings)
{
    if(i==" ")
    {
        continue;
    }
    console.log(`each element ${i}`);
}


//Maps

const map=new Map()
map.set(10,"India");
map.set(11,"jay");
map.set(12,"Hind");
map.set(10,"ray");
map.set(13,"may")

console.log(map);


for(const i of map)
{
    console.log(i);
}

//destructuring the map into separate key and value

for (const [i,j] of map) {
    console.log(`key ${i} and value ${j}`);
}


//iteration of  object
const myObj={
    game:"GT",
    game2:"driving car",
    game3:"candy crush"
}

//by this type we can not iterate
// for (const [key,value] of myObj) {
//     console.log(key ," and ", value);
// }

//******for of loop not work on objects******
 
