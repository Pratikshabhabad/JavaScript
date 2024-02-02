const coding=["js","python","java","cpp","ruby"];

// coding.forEach(i => {
//     console.log(i);
// });

//this is another type
// coding.forEach(function (i)
// {
//     console.log(i);
// })

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"js",
        languageFileName:"javascript",
    },
    {
        languageName:"java",
        languageFileName:"java",
    },
    {
        languageName:"cpp",
        languageFileName:"c++",
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})

