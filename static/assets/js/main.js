
// =========== Search bar String Selection ============
const searchBlock = () => {

  let filter = document.getElementById("myInput").value.toUpperCase();


  let valueof = document.getElementsByClassName("value__search");
  // console.log(valueof);// list call of title

  let sec = document.getElementsByClassName("shop__flex");// iterm call of block of code 

  for (let index = 0; index < sec.length; index++) {
    let subValue = valueof[index].innerHTML;// inner html of list

    
    subValue = subValue.substring(0, 5);// compairing with upto 5th char
    filter = filter.substring(0, 5);// compairing with upto 5th char

    
    

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
    
  };

// show more 

let noOfCharac = 150;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    //If text length is less that noOfCharac... then hide the read more button
    if(content.textContent.length < noOfCharac){
        content.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = content.textContent.slice(0,noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}




   



   





