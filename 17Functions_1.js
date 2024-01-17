function calculateCartPrice(...num)//... -  dot operator called **rest operator** /spread operator
{

        return num

}

console.log(calculateCartPrice(200,23,122));//get an array

function calculateCartPrice1(val1,val2,...price)
{
    return price
}

console.log(calculateCartPrice1(100,200,300,400,500));//val1=100 val2=200, [price=300,400,500 return only]

const user={
    gift:"Chocolate",
    price:"199",
    quantity:10
}

function handleObj( obj1)
{
    console.log(`gift is ${obj1.gift} and price  is ${obj1.price} and quantity is ${obj1.quantitys}`);
}


//handleObj(user)//quantity will show undefined instead of error
handleObj({ gift:"teddy"})// by this type you can also pass object to function

const myArr=[100,200,300,400,500];
function arr(getEle)
{
    return getEle[3];
}

//console.log(arr(myArr));//function that is returning the element from an array
console.log(arr(["mango","banana","cherry","strawberry","guava"]));
