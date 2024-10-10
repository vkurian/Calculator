
//const element = document.getElementById("myDIV");
//const list = element.querySelectorAll("p");
var currentValue="";
var previousValue=""
var opervalue=""


document.addEventListener('DOMContentLoaded',function(){
    //const container=document.querySelector(".container")
    //const rows= container.querySelectorAll("#row");
    const num= document.querySelectorAll(".num");
    const oper= document.querySelectorAll(".oper");
    const clear= document.querySelector(".clear")
    const per= document.querySelector(".per");
    const pi= document.querySelector(".pi");
    const pre= document.querySelector(".pre");
    const blank= document.querySelector("#blank");
    const blank2= document.querySelector("#blank2")

       

 
         clear.addEventListener('click',function(){
          
          previousValue=''
          blank.innerHTML= currentValue; 
          blank2.innerHTML=previousValue;
        
         })

         oper.forEach(oper=>{
          oper.addEventListener('click', function(e){
            operator(e.target.textContent);
               ;
            currentValue=''
            blank.innerHTML=currentValue
            blank2.innerHTML= previousValue
            //blank.innerhtml=;
          })
         })

        num.forEach(num=> {
            num.addEventListener('click', function(e){
            number(e.target.textContent);
            blank.innerHTML=currentValue;


            }) 
              

            })

            function operator(oper){
              opervalue +=oper
              previousValue= opervalue+currentValue

              if(opervalue.legth)
 

            }

      

               



            

            function number(numb){

              if(currentValue.length<=5){
                currentValue+=numb;
              }


              

            }
          })





