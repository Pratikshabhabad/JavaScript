//literal object
//user is literal obj
const user={
    username:"prat",
    loginCount:4,
    signIn:'yes',

    getUserDetails:function(){
      //  console.log("got data ");

      //console.log(`username:${this.username}`);

      console.log(this);
    }
}

//this word shows current context

console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);//empty parenthsis -no value in global context- in browser get value by doing inspect


//-------------------constructor---------------------
// const promiseOne =new Promise()
// const date=new Date()
//new keyword is constructor function-allow multiple instance from one object

function User(username,loginCnt,isloggedIn)
{
   this.username=username,
   this.loginCnt=loginCnt,
   this.isloggedIn=isloggedIn

   //you can also write function here
//    this.greeting=function()
//    {
//     console.log("hi");
//    }

  // return this//implicitely define bydefault

}

const userOne=User("pratiksha",10,"true");
const userTwo=User("ChaiAurCode",19,"false")
console.log(userOne);//value get Override
const userThree=new User("ana",8,"true")
console.log(userOne);
console.log(userThree);

//new keyword -empty object create called instance /object creation
//construtor call by new keyword -argument packed inside constructor nad return back
//arguments inject in this keyword
//we got back in function





