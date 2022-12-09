
let getEl = selector => document.querySelector(selector);

 function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }


const btnStart = getEl('[data-start]');
const btnStop = getEl('[data-stop]');
const body = document.body;

btnStart.addEventListener('click', Start);
btnStop.addEventListener('click', Stop);

btnStop.setAttribute('disabled', true);
let interval = null;


function Start() { 
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
  
    interval = setInterval(() =>{
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function Stop() {
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', true);
    clearInterval(interval);
} 
