const button = document.getElementById("increment-btn");
console.log(button);

const counter = document.getElementById("count-el");
console.log(counter);

const button2 = document.getElementById("decrement-btn");

const save = document.getElementById("save-btn");

const saved_el = document.getElementById("saved-el");

const clear = document.getElementById("clear");

let count = 0;

const increase = () => {
  const newCount = (count += 1);
  counter.innerText = newCount;
  console.log(newCount);
};
console.log(increase);

button.addEventListener("click", increase);

const decrease = () => {
  const freshCount = (count -= 1);
  counter.innerText = freshCount;
  console.log(freshCount);
};
console.log(decrease);

button2.addEventListener("click", decrease);

const saveFunction = () => {
  const countSave = ` ${count}`;
  saved_el.innerText = saved_el.innerText + countSave;
  counter.innerText = count = 0;
};
console.log(saveFunction);

save.addEventListener("click", saveFunction);

const clearFunction = () => {
  counter.innerText = count = 0;
};

clear.addEventListener("click", clearFunction);
