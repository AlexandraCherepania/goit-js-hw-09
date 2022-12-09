// import flatpickr from "flatpickr";

// const buttonStart = document.querySelector('button[data-start]')
// buttonStart.setAttribute("disabled", true);
// let countDown = null;
// let deltaTime;

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,

// onClose(selectedDates) {
//     const currentDate =  Date.now();
//     const startDate = selectedDates[0].getTime();

// if (currentDate < startDate){
//   console.log("Ok");
//   buttonStart.removeAttribute("disabled","disabled");
//   buttonStart.addEventListener("click", onTimeStart);

//   function onTimeStart() {
//     let interval = setInterval(() => {
//       const currentDate = Date.now();
//       const deltaTime = startDate - currentDate;
//       const countDown = convertMs(deltaTime);
//       updateTimer(countDown);

//       console.log(countDown);

//   if (deltaTime < 1000){
//       clearInterval(interval);
//         }
//       }, 1000);
//   }
// }else {
// window.alert("Please choose a date in the future");
// }  
// },
// };

// function updateTimer ({days, hours, minutes, seconds}) {
//   const Days = document.querySelector('[data-days]');
//   const Hours = document.querySelector('[data-hours]');
//   const Minutes = document.querySelector('[data-minutes]');
//   const Seconds = document.querySelector('[data-seconds]');
//   Days.textContent = `${days}`;
//   Hours.textContent = `${hours}`;
//   Minutes.textContent = `${minutes}`;
//   Seconds.textContent = `${seconds}`;

// }  

// const calendar = flatpickr('#datetime-picker', options)

// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     // Remaining days
//     const days = addLeadingZero(Math.floor(ms / day));
//     // Remaining hours
//     const hours = addLeadingZero(Math.floor((ms % day) / hour));
//     // Remaining minutes
//     const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//     // Remaining seconds
//     const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
//     return { days, hours, minutes, seconds };
//   }

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');}

//  const design = document.querySelector(".timer");
//     design.style.textAlign = "left";
//     design.style.padding = "20px";
//     design.style.color = "green";
//     design.style.fontSize = "20px";
    




   

    


