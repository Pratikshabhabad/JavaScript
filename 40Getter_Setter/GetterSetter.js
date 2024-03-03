class User{
    constructor(email,pass)
    {
        this.email=email;
        this.pass=pass;
    }
    get pass()
    {
        return this._pass.toUpperCase()
    }
    set pass(value)
    {
        this._pass=value.toUpperCase();
    }
}


const hitesh=new User("prat@gmail.com","abc")
console.log(hitesh.pass);

//for pass encryption ,to restrict access pass
console.log(hitesh.pass);//this give issue of  stack Overflow so we have to chnage varible in getter and setter so it is overiding in constructor 
