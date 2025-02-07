let generateCircles=()=>{
    let randomNum = Math.floor(Math.random() * 6) + 1;
    let circlesDiv = document.querySelector("#circles");
    circlesDiv.innerHTML = '';
  
    for (let i = 0; i < randomNum; i++) {
      let circle = document.createElement('div');  //create element is method of DOM it creates a new html element
      circle.classList.add('circle');     //classlist is a property of html elements that return list of classe
      circlesDiv.appendChild(circle);    //appendChild() method appends a node(element) as the child of an element
    }
  }
  