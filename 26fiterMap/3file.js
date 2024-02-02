const nums=[1,2,3]

//this is simple value 
const myTotal=nums.reduce(function(accumulator,currentVal) {
    console.log(`acc:${accumulator} and curVal: ${currentVal}`);
    return accumulator+ currentVal
},0)

console.log(myTotal);


//this is by Arrow function
//smart code and reduce space 
const total=nums.reduce((accumulator,currentVal)=>accumulator+currentVal,0)

console.log(total);

const shoppingCart=[
    {
        itemName:"js Course",
        price:2999,
    },
    {
        itemName:"python Course",
        price:1999,
    },
    {
        itemName:" java Course",
        price:2990,
    },
    {
        itemName:"android Course",
        price:5999,
    },
    {
        itemName:"kotlins Course",
        price:1599,
    },
]

const MYShop=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(MYShop);


