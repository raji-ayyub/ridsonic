document.addEventListener('DOMContentLoaded', function() {
    

var menu= document.getElementById("menu");
var btn1= document.getElementById("btn1");
var hero= document.getElementById("hero");
var btn2= document.getElementById("btn");
var box= document.getElementById("box");
var hero1=document.getElementById("hero1");
var a= document.getElementById("home");
var b= document.getElementById("Services");
var c= document.getElementById("Products");
var d= document.getElementById("About");
var e= document.getElementById("Works");
var f= document.getElementById("terms");






btn1.addEventListener("click", function(){
    if(menu.style.marginRight === "0rem") {
        menu.style.marginRight="-12rem";
    }else{
        menu.style.marginRight="0rem";
    }


   
});

document.addEventListener('click', function(event) {
 
    if (!menu.contains(event.target) && !btn1.contains(event.target)) {
        menu.style.marginRight="-12rem";
    }
  });

  hero.classList.add('show');
  
btn2.addEventListener("click", function(){
    
    btn2.innerHTML="Minimize";
    btn2.style.backgroundColor="green";

    if(hero.classList.contains("show")){
        hero.classList.remove("show");
        hero1.classList.add("show");
      

    }
    else{
        hero1.classList.remove("show");
        hero.classList.add("show");
        btn2.innerHTML="See All";
        btn2.style.backgroundColor="greenyellow";
    }


   



})



















a.addEventListener("click", function(){
    a.style.color="black";
    a.style.fontSize="20px";
    e.style.color="forestGreen";
    b.style.color="forestGreen";
     c.style.color="forestGreen";
      d.style.color="forestGreen";
      f.style.color="forestGreen";

      e.style.fontSize="15px";
      b.style.fontSize="15px";
       c.style.fontSize="15px";
        d.style.fontSize="15px";
        f.style.fontSize="15px";
        
       
})



b.addEventListener("click", function(){
    b.style.color="black";
    b.style.fontSize="20px";
    a.style.color="forestGreen";
    e.style.color="forestGreen";
     c.style.color="forestGreen";
      d.style.color="forestGreen";
      f.style.color="forestGreen";

      e.style.fontSize="15px";
      a.style.fontSize="15px";
       c.style.fontSize="15px";
        d.style.fontSize="15px";
        f.style.fontSize="15px";


       
})





c.addEventListener("click", function(){
    c.style.color="black";
    c.style.fontSize="20px";
    a.style.color="forestGreen";
    b.style.color="forestGreen";
     e.style.color="forestGreen";
      d.style.color="forestGreen";
      f.style.color="forestGreen";


      e.style.fontSize="15px";
      b.style.fontSize="15px";
       a.style.fontSize="15px";
        d.style.fontSize="15px";
        f.style.fontSize="15px";

        
})



d.addEventListener("click", function(){
    d.style.color="black";
    d.style.fontSize="20px";
    a.style.color="forestGreen";
    b.style.color="forestGreen";
     c.style.color="forestGreen";
      e.style.color="forestGreen";
      f.style.color="forestGreen";

      e.style.fontSize="15px";
      b.style.fontSize="15px";
       c.style.fontSize="15px";
        a.style.fontSize="15px";
        f.style.fontSize="15px";

       
})



e.addEventListener("click", function(){
    e.style.color="black";
    e.style.fontSize="20px";
    a.style.color="forestGreen";
     b.style.color="forestGreen";
      c.style.color="forestGreen";
       d.style.color="forestGreen";
       f.style.color="forestGreen";

       a.style.fontSize="15px";
      b.style.fontSize="15px";
       c.style.fontSize="15px";
        d.style.fontSize="15px";
        f.style.fontSize="15px";


       
})




f.addEventListener("click", function(){
    f.style.color="black";
    f.style.fontSize="20px";
    a.style.color="forestGreen";
     b.style.color="forestGreen";
      c.style.color="forestGreen";
       d.style.color="forestGreen";
        e.style.color="forestGreen";

        e.style.fontSize="15px";
      b.style.fontSize="15px";
       c.style.fontSize="15px";
        d.style.fontSize="15px";
        a.style.fontSize="15px";

      
})
})