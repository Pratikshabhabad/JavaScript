//mordern -function based syntax
//define Properties


function User(email,pass)
{
    this._email=email;
    this._pass=pass

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()//here value overide
        },
        set:function(val){
            this.email=val
        }
    })
}

const chai=new User("chai@gmail.com","pass")
console.log(chai.email);