fetch("https://api.github.com/users/pratikshabhabad")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

///404--as response get 