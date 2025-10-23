const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("btn");
const toogle = document.getElementById("display");

const list = [];
const localData = localStorage.getItem("data");
console.log(localData);

button.addEventListener("click", () => {
  output.textContent = "";
  list.push(input.value);

  localStorage.setItem("data", list);

  console.log(list);
  for (item of list) {
    output.insertAdjacentHTML("beforeend", `<li class="list">${item}</li>`);
    input.value = "";
  }
  const li = document.querySelectorAll(".list");
  console.log(li);
});

output.addEventListener("click", (e) => {
  e.target.style.textDecoration = "line-through";
  e.target.classList.add("strike");
});

toogle.addEventListener("click", (e) => {
  const li = document.querySelectorAll(".strike");
  console.log(li);
  li.forEach((e) => {
    e.style.display = "none";
  });
});
