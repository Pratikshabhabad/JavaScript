function setUsername(username)
{
    //complex dv call
    this.username=username
    console.log("called");
}

function createUser(username,mail,pass)
{
    //setUsername(username)//this is not gettting call

    setUsername.call(this,username)//.call hold reference and this hold value 
    this.mail=mail,
    this.pass=pass
}

 const chai=new  createUser("chai","prat@gmail.com","1230")
 console.log(chai);//no username come