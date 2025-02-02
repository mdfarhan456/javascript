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
    let errcpass=document.querySelector("#errorcpass")

    if(inpname==""){
        errname.innerHTML="*Please fill the name field"
        errname.style.color="red"
        return false;
    }

    else if(isNaN(inpnum)){
        errnum.innerHTML="please enter number only"
        errnum.style.color="red"
        return false
    }

    else if(inpnum.length!=10){
        errnum.innerHTML="*please enter 10 digits only"
        errnum.style.color="red"
        return false;

    }

    else if(!(inpemail.includes('@') && inpemail.includes('.com'))){
        erremail.innerHTML="*please enter valid email"
        erremail.style.color="red"
        return false;

    }

    else if(inppass!=inpcpass){
        errcpass.innerHTML="*please enter same password"
        errcpass.style.color="red"
        return false;

    }

    else if(!(inppass.match([/1234567890/]) 
        && inppass.match([/!@#$%^&*()/])
        &&inppass.match([/ a-z/])
        && inppass.match([/A-Z/]))){
            errpass.innerHTML="*please enter strong password"
            errpass.style.color="red"
            return false
        }
}