// let clickme=document.querySelector("#btn")
// //alert("Hello")
// //clickme.addEventListener("click",()=>{
// clickme.addEventListener("dblclick",()=>{
//     let box=document.querySelector("#box")
//     box.style.backgroundColor="red";
// })

let inpbox=document.querySelector("#inp")
let head=document.querySelector("#head")

// inpbox.addEventListener("keydown",(e)=>{
//     console.log(e.key);
// })

// inpbox.addEventListener("input",()=>{
//     console.log(inpbox.value);
// })

inpbox.addEventListener("input",()=>{
    head.innerHTML=inpbox.value;
})