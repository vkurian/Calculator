
//const element = document.getElementById("myDIV");
//const list = element.querySelectorAll("p");

document.addEventListener('DOMContentLoaded',function(){
    //const container=document.querySelector(".container")
    //const rows= container.querySelectorAll("#row");
    const num= document.querySelectorAll(".num");
    const oper= document.querySelectorAll(".")


    //const clear= document.querySelector(".clear");

    



    /*num.addEventListener("click",function(){
        console.log("hello");

    })*/


        num.forEach(num => {
            num.addEventListener('click', event => {
                console.log("Hello")
              //handle click
            })
          })
})




