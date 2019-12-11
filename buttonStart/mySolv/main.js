
const button = document.querySelector("button");
const liItems = document.querySelectorAll("li");
let fontSize = 10;

button.addEventListener("click", () => {
   liItems.forEach(li => {
       li.style.display = "block";
       li.style.fontSize = fontSize + "px";
   })
   fontSize++;
})

