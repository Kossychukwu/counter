"use strict";




const button = document.querySelector('button');
const para = document.querySelector('p');
let counter  = 0;

function startCounter (){
    let count = ++counter;
    para.textContent = `current count is:${count}`;
    
};

button.onclick = () =>{
    startCounter();
};
