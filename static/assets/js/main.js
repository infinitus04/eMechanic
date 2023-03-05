
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

//  js for nevigation colour change 
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

   



   





