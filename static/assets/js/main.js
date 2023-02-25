
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
    console.log("prssed");
    
   }
    
  }



   





