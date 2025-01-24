let obj={
    name:"ritika",
    age:21,
   // age:23,
    city:"bhopal",
    fruits:["orange","banana","apple"],
    cybrom:function(){
        console.log(`Hello ${this.name} and your age is ${this.age}`);

    }
}
// console.log(obj)
// //console.log(obj.age)
// console.log(obj.city)

// obj.email="ritika@gmail.com"  //inserting the data
// console.log(obj)

// obj.city="jhansi"  // updation
// console.log(obj)

// delete obj.city
// console.log(obj)  // Deletion


//console.log(obj.fruits[1])  // array access

obj.cybrom()  // function calling

