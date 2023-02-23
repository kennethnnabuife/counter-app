const button = document.getElementById("increment-btn");

const counter = document.getElementById("count-el");

const button2 = document.getElementById("decrement-btn");

const save = document.getElementById("save-btn");

const saved_el = document.getElementById("saved-el");

const clear = document.getElementById("clear");

let count = 0;

const increase = () => {
  const newCount = (count += 1);
  counter.innerText = newCount;
};

button.addEventListener("click", increase);

const decrease = () => {
  const freshCount = (count -= 1);
  counter.innerText = freshCount;
};

button2.addEventListener("click", decrease);

const saveFunction = () => {
  const countSave = ` ${count}`;
  saved_el.innerText = saved_el.innerText + countSave;
  counter.innerText = count = 0;
};

save.addEventListener("click", saveFunction);

const clearFunction = () => {
  counter.innerText = count = 0;
};

clear.addEventListener("click", clearFunction);
