document.getElementById("burger").addEventListener("click",()=>{

   if(document.getElementById("navid").style.display =="none")
   {
       document.getElementById("navid").style.display ="flex";
       document.getElementById("navbarid").style.height = "600px";
   } 
   else
   {
       document.getElementById("navid").style.display ="none";
       document.getElementById("navbarid").style.height = "200px";
   }
    
});





