//iife-Immediately invoked function expression

(function chai()
{
    console.log("DB Connected");
})();//function wrap in parenthesis and called to function by () doing this after function written in brackets


(function Try(){//Named IIFe
    console.log("I read it");
})();//semicolon after function is necessary


((name)=>{//unnamed IIFE
    console.log(`I write it ${name}`);
})("Shalini")








