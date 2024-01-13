//singleton Specific 

const instaUser=new Object();//singleton Object
console.log(instaUser);//empty Object

const instaUser2={}//non Singleton Object
console.log(instaUser2);

//Adding  values toobject

instaUser.id="123a"
instaUser.name="pratiksha"
instaUser.email="prat123@gmail.com"

console.log(instaUser);

const regularuser={
    email:"Omshanti@gmailcom",
    fullName:{
        userFullName:{
            firstName:"pratiskha",
            LastName:"Bhabad"
        }
    }

}


console.log(regularuser.fullName);
console.log(regularuser.fullName.userFullName.firstName);
console.log(regularuser.fullName.userFullName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2}//object inside object
console.log(obj3);

const obj4=Object.assign({},obj1,obj2)//convert to single Object like Array
console.log(obj4);

const ob={...obj1,...obj2};//spreading
console.log(ob);


const user=[
    {
        id:1,
        name:"prat",
        email:"rani@gmail.com"
    },
    {
        id:2,
        name:"prathm",
        email:"renu@gmail.com"
    },
    {
        id:3,
        name:"pratik",
        email:"rani123@gmail.com"
    },
    {
        id:4,
        name:"prathana",
        email:"rana@gmail.com"
    }
]

console.log(user[2].id);
console.log(user[2].name);
console.log(user[1].email);


console.log(instaUser);
console.log(Object.keys(instaUser));//access in array

const arr=Object.keys(instaUser);
console.log(arr[2]);

console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

const arr2=Object.entries(instaUser);

console.log(arr2[1][0]);

console.log(instaUser.hasOwnProperty("name"));
