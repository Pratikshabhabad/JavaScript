const form=document.querySelector("form")
// const height= parseInt(document.querySelector('#height').value)
// const weight= parseInt(document.querySelector('#weight').value)
//for selecting id use #(hash) in queryselector
//here value will get empty while loading page 

form.addEventListener('submit',function(e){
    e.preventDefault()

   const height= parseInt(document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
    //here after clicking get value
    const result = (document.querySelector('#result'))

    if(height===' '|| height<0 || isNaN(height))
    {
        result.innerHTML=`please give valid height ${height}`;
    }
    else if(weight===' '|| weight<0 || isNaN(weight))
    {
        result.innerHTML=`please give valid weight ${weight}`;
    }
else{
        const bmi= (weight/((height*weight)/10000)).toFixed(2);
      
        result.innerHTML=`<span>${bmi}</span>`


}
    

})