// let  myName="prat     "

// console.log(myName.trueLength());

let array=["mesh","ring"]

let power={
    thor:"hammer",
    spiderman:"sling",

    
    getPower:function()
    {
        console.log(`spider power is${this.spiderman}`);
    }
}

///prototype add directly add in  object thats why access to everyone
Object.prototype.hitesh=function(){
    console.log("hitesh is presnt");
}
//only provide to array not available eto object
Array.prototype.heyHitesh=function(){
    console.log("hi i m trying");
}
//power.hitesh()

array.hitesh()
array.heyHitesh()
//power.heyHitesh()//got error

////inheritance---prototyple inheritance-----old version---------

const user={
    name:"prat",
    mail:"prat@gmail.com"
}

const Teacher={
    makevideo:true
}


const teachingSupport={
    available:false
}

const TAsupport={
    makeAssignment:"js Assign",
    fullTime:true,
    __proto__:teachingSupport
}
Teacher.__proto__=user


///mordern syntax
Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUser="chaiAurcode     "

String.prototype.trueLength=function(){
    console.log(`${this}`);//refrence
  //  console.log(`${this.name}`);
    console.log(`length is ${this.trim().length}`);
    
}

anotherUser.trueLength()
"pratiksha".trueLength();
