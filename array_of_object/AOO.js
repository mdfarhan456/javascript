//map filter
//map method return a new array
// e for event
// that type of function which are passed in paramiter thats call callback functio
//which function takes another function in its paramiter its call highreorder function

// let arr=[5,4,1,5,3,5]

// let arr2=arr.map((e)=>{
//     return e*2;

// })

// console.log(arr2)

// we can also use like that for single line


// let arr=[2,4,1,5,3,5]

// let arr2=arr.map((e)=>e*2)

// console.log(arr2)



//                          FILTER
   
// filter method also returns new array


let arr=[3,5,2,4,6]

// let ans=arr.filter((e)=>{
//     return e>2
// })
// console.log(ans)



//                   FOR EACH
// for each can do bothe work filter and map but it returns string

// let ans = arr.forEach((e)=>{
//     console.log(e*2);
// })




let Aoo=[{
    name:"farhan",
    age:21,
    city:"bhopal"
},{
    name:"ritika",
    age:20,
    city:"janshi"
},{
    name:"shivam",
    age:22,
    city:"Indore"
}]

let show=document.querySelector("#show")

let ans=Aoo.map((e)=>{
     
   // return e.name+e.age+e.city;
    // return e.name + e.age;
    // return e;
   // return e.age;
   show.innerHTML+=`<h1> <div id="name">${e.name}</div> <div id="age">${e.age}</div> <div id="city">${e.city}</div></h1>`;
})

//show.innerHTML+=`<h1> ${ans} </h1>`;
// console.log(ans)





let Aoo2=[{
    name:"farhan",
    age:21,
    city:"bhopal"
},{
    name:"ritika",
    age:20,
    city:"janshi"
},{
    name:"shivam",
    age:22,
    city:"Indore"
}]

let show2=document.querySelector("#show2")

let ans2=Aoo2.map((e)=>{
     
   
   show2.innerHTML+=
   `<tr>
   <td id="name2">${e.name}</td>
   <td id="age2">${e.age}</td>
   <td id="city2">${e.city}</td>
   </tr>`;
})

