
let sub=()=>{
    let inpname=document.querySelector("#name").value;
    let inpnum=document.querySelector("#number").value;
    let inpemail=document.querySelector("#email").value;
    let inppass=document.querySelector("#pass").value;
    let inpcpass=document.querySelector("#cpass").value;

    
    let errname=document.querySelector("#errorname")
    let errnum=document.querySelector("#errornumber")
    let erremail=document.querySelector("#erroremail")
    let errpass=document.querySelector("#errorpass")
    let errepass=document.querySelector("#errorcpass")
   // alert("submitted")
    
    if(inpname==""){
        let inputname=document.querySelector("#name")
        inputname.style.border="1px solid red"
        inputname.placeholder="please fill the name field"
       // errname.innerHTML="please fill the name field"
        //errname.style.color="red"
        inputname.style.color="red"
        return false;
    }

    else if(isNaN(inpnum)){
        errname.innerHTML=""
        errnum.innerHTML="please enter number only"
        errnum.style.color="red"
        return false
    }

    else if(inpnum.length!=10){
        errname.innerHTML=""
        errnum.innerHTML="please enter 10 digits only"
        errnum.style.color="red"
        return false
    }


    else if(!(inpemail.includes('@')  && inpemail.includes('.com'))){
        erremail.innerHTML="please enter valid email"
        erremail.style.color="red"
        return false
    }

    // else if(inppass!=inpcpass){
    //     errcpass.innerHTML="please enter right passworn"
    //     errcpass.style.color="red"
    //     return false

    // }

   
    else if(!(inppass.match([/1234567890/]) 
        && inppass.match([/ !@#$%^&*()/])
      && inppass.match([/a-z/])
      && inppass.match([/A-Z/]))){
        errpass.innerHTML="please enter Strong password"
        errpass.style.color="red"
        return false
      }
         

}