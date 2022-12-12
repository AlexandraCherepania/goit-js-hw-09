import Notiflix from 'notiflix';




const form = document.querySelector(".form");

form.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve("Success! Value passed to resolve function");
        Notiflix.Notify.success(`Fulfilled promise ${position+1} in ${delay}ms`);
      } else {
        reject("Error! Error passed to reject function");
        Notiflix.Notify.failure(`Rejected promise  ${position+1} in ${delay}ms`);
      }
    }, delay);
  })
  };

function handleSubmit(event) {

  event.preventDefault();
  let delayFirst = Number(form.delay.value);
  const delayStep = Number(form.step.value);
  const promisesAmount = Number(form.amount.value);

  for (let position = 0; position <= promisesAmount - 1; position += 1) {
    const delay = delayFirst + (position * delayStep);
    console.log(delay);
    console.log(position);

    createPromise(position, delay);
  }
}
