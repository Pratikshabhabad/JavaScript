const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")

buttons.forEach(function (button)
{
    button.addEventListener("click",function(e)
    {
        console.log(e);
        console.log(e.target);
        const a=e.target.id
        if(a==='grey')
        {
            body.style.backgroundColor="grey"
        }
        else if(a==='white')
        {
            body.style.backgroundColor="white"
        }
        else if(a==='yellow')
        {
            body.style.backgroundColor="yellow"
        }
        else 
        {
            body.style.backgroundColor="blue"
        }
    })
})