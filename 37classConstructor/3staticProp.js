class User{
    constructor(username)
    {
        this.username=username
    }

    logMe()
    {
        console.log(`username :${this.username}`);
    }

   static createId()//static not give access to everyOne and child also
    {
        return `123`
    }
}

// const chai=new User("pratiksha")
// console.log(chai.createId())

class Teacher extends User{
    constructor(username,mail)
    {
        super(username)//it will take this and username also for reference from above
        this.mail=mail
    }
}

const iphone=new Teacher("Iphone",'i@gmail.com')
iphone.logMe()
console.log(iphone.createId());