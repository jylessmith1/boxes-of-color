let boxes = document.querySelectorAll('.box');

//   box.forEach(box => box.addEventListener('click',function(event){

//     box.style.backgroundColor =  box.style.backgroundColor === 'red' ? 'black' : 'red';
//   }));

//let button =document.querySelectorAll('button');

let color = "white";

let colorButtons = document.querySelectorAll('header > button');
colorButtons.forEach(button => {
    button.addEventListener('click', function() {
        color = button.innerText;
        console.log(color)
    })
})

boxes.forEach(box => box.addEventListener('click',function() {
        if(!inRandomMode) {
    box.style.backgroundColor = box.style.backgroundColor === color ? 'black' : color;
     } else {
        box.style.backgroundColor = randomRGB();
     }
}))
let inRandomMode = false;
let randomButton = document.querySelector('.random > button')
randomButton.addEventListener('click', function() {
    inRandomMode = true;
   
    function randomRGB(){
        let r = Math.floor(Math.random()* 225)
        let g = Math.floor(Math.random()* 225)
        let b = Math.floor(Math.random()* 225)
        return `rgb(${r}), ${g}, ${b})`
    }
}) ;
///////// finish code
let mydiv =document.getElementsByClassName('random')
let myButton = document.querySelector('div')

let colorHeading = document.querySelector('header > h1')
// let allNumber = []

// function newRndmColor() {
//     let color = " ";
//   for(let i = 0; i < 6; i++){
//         color += Math.floor(Math.random() * 255.toString());
//   }     
//         console.log(color);
//   }
// myButton.addEventListener('click', () => {
//     mydiv.style.backgroundColor= newRndmColor(); 
  
//     });

// let randomButton = document.querySelector('.random > buttom')
//     randomButton.addEventListener('click', function(){}
// );