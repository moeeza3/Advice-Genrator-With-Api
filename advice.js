
let adviceTxt=document.getElementById("advice-txt");
let idnumber=document.getElementById("idnumber");
let getadvice=document.getElementById("getadvice");

try{
    fetch(`https://api.adviceslip.com/advice`)
    .then((response)=>{
        
        return response.json();
    }).then((data)=>{
        getadvice.addEventListener("click",()=>{
     
          location.reload();
        });
        idnumber.innerText='ADVICE #'+data['slip']['id'];
        adviceTxt.innerText='"'+data['slip']['advice']+'"';
    }) 
}

catch(error){
    console.log(error);
};