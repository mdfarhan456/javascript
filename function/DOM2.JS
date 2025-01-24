let hero=()=>{
    console.log("hello")
}
hero()


//------------------------------------------------------

let but=(n1,n2)=>{
    console.log("addition of two numbers =",n1+n2)
}


//-----------------------------------------------------------







let run=(name,age)=>{
   // console.log(`hello my name is ${name} and age is ${age}`)
let div=document.querySelector("#hero")
    div.innerHTML=(`hello my name is ${name} and age is ${age}`)

}
//run();

let sub=()=>{
    let text=document.querySelector("#inp").value
    alert(`hello ${text}`)
}