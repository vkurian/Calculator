
var currentValue="";
var previousValue=""
var opervalue=""
var NewValue=''
 


document.addEventListener('DOMContentLoaded',function(){

    const num= document.querySelectorAll(".num");
    const oper= document.querySelectorAll(".oper");
    const clear= document.querySelector(".clear")
    const equal= document.querySelector(".equal");
    const blank= document.querySelector("#blank");
    const blank2= document.querySelector("#blank2")
  


    equal.addEventListener('click',function(){
      calculator();

      

     if(opervalue==='/'){

       previousValue=NewValue;
       blank.innerHTML=previousValue;
       blank2.innerHTML= opervalue + currentValue
     
      }

      else if(opervalue==='%'){
        blank.innerHTML=NewValue
        blank2.innerHTML= previousValue + opervalue + currentValue
      }

      else if(opervalue==='-' || opervalue==='x^2'){
        previousValue=NewValue;
        blank.innerHTML=previousValue;
    
      }


     else if(opervalue==='sqrt()'){

        blank.innerHTML=NewValue;

      }
    else {
      currentValue=NewValue;
      blank.innerHTML=currentValue;

    }

      })



        clear.addEventListener('click',function(){
        
        previousValue='';
        currentValue='';
        NewValue='';
        opervalue=''
        blank.innerHTML= currentValue; 
        blank2.innerHTML=previousValue;



      
       })

       oper.forEach(oper=>{
        oper.addEventListener('click', function(e){
          operator(e.target.textContent)

         if(opervalue==='%'){

            previousValue=currentValue;
            currentValue=''
            blank2.innerHTML= previousValue+opervalue
            blank.innerHTML=currentValue
            
           

           }
        else if(opervalue=='sqrt()'){
             previousValue= currentValue
             blank2.innerHTML=  'sqrt(' + previousValue + ')'
             currentValue=''
             blank.innerHTML=currentValue;
 
            
            
           }

           else if(opervalue==='x^2'){
            previousValue=currentValue;
            blank.innerHTML= previousValue
            blank2.innerHTML=  '^2'

           }

      else if(currentValue==='' ){
              opervalue='';


           }


          
       else{

           blank2.innerHTML= currentValue + opervalue;
           previousValue=currentValue;
           previousValue = currentValue;
           currentValue='';
           blank.innerHTML= currentValue;

          

       }
           


        })
       })



      num.forEach(num=> {
          num.addEventListener('click', function(e){
          number(e.target.textContent);
          blank.innerHTML=currentValue;


          }) 
            

          })

          function operator(oper){
          opervalue= oper;
  
          }

          function calculator(){
           if (opervalue==='+' ){
            NewValue= parseFloat(currentValue)+ parseFloat(previousValue)
           
            }
           else if (opervalue==='-'|| Decvalue==='.'){
            NewValue=  parseFloat(previousValue) - parseFloat(currentValue) 
             
            }

          else  if (opervalue==='x' ){
            NewValue= parseFloat(currentValue) * parseFloat(previousValue)
            }
           else if(opervalue==='/'|| Decvalue==='.'){
            

            NewValue= parseFloat(previousValue)/parseFloat(currentValue) 
           }

           else if(opervalue==='sqrt()'){
             
            NewValue=Math.sqrt(previousValue)
             
            }
            else if(opervalue==='x^2'){

              NewValue= parseFloat(previousValue) **2;

            }
            else if(opervalue==='%'){

              NewValue= parseFloat(previousValue) % parseFloat(currentValue);

            }

          }
     

          function number(numb){

            if(currentValue.length<=5){
              currentValue+=numb;
            }


            

          }
          
        })






           





