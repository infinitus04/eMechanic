
// =========== Search bar String Selection ============
const searchBlock = () => {

  let filter = document.getElementById("myInput").value.toUpperCase();
  console.log("Input value = "+filter); // input value

  let valueof = document.getElementsByClassName("value__search");
  // console.log(valueof);// list call of title

  let sec = document.getElementsByClassName("shop__flex");// iterm call of block of code 

  for (let index = 0; index < sec.length; index++) {
    let subValue = valueof[index].innerHTML;// inner html of list

    
    subValue = subValue.substring(0, 5);// compairing with upto 5th char
    filter = filter.substring(0, 5);// compairing with upto 5th char

     console.log(" compairing value = "+subValue);
    

     if(filter == ""){
      sec[index].style.display = "";
     
    }
   
     else if (filter != subValue.toUpperCase()) {
        sec[index].style.display = "none";
        
   
      } 
   
     
      else {
        sec[index].style.display = "";
      
        continue;
      }

     


   }
  
 
};


  
const ref = ()=>{



 
    let sec2 = document.getElementsByClassName("shop__flex");

   for (let index = 0; index < sec2.length; index++) {
    sec2[index].style.display = "";
    
    
    
   }
    
  }

  // js for image slider
  
    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 5000);
      }
      repeater();
    }
    repeat();
   



   





