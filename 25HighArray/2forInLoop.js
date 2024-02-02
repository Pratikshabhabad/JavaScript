//for in loop

const myObj={
    js:"javascript",
    cpp:"C++",
    rb:"rubby",
    swift:"swift by Apple"

}

for (const key in myObj) {
  console.log(key);
  console.log(`${key} shortCut is for ${myObj[key]}`);
}

//for in loop work for array but it prints key means it print index
const arr=[1,2,3,4,5];
for (const i in arr) {
  console.log(i);//this statement for key-index
  console.log(arr[i]);///this print value

}


//map is not iterable so thats why for in not work for map
const map=new Map()
map.set(1,5);
map.set(2,6);
map.set(3,7);

for (const i in map) {
    console.log(`${i} is the key and value is ${map[i]}`);//no output for this 
}
