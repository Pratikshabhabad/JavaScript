class User{
    constructor(username)
    {
        this.username=username
    }

    logMe()
    {
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,pass)
    {
       super(username)
        this.email=email;
        this.pass=pass
    }

    addCourse(){
        console.log(`new Course added by ${this.username}`);
    }
}

const test=new Teacher("pranu","pra@gmail.com","1234")
test.addCourse();

const chai=new User("Himesh");
//chai.addCourse()
chai.logMe()

console.log(test===chai);
console.log(test instanceof User);