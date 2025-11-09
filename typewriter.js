const text = "Developer";
const typewriter = document.getElementById("typewriter");
let index = 0;

function type() {
  typewriter.textContent = text.slice(0, index);
  index++;
  if (index > text.length) index = 0; // loop continuously
  setTimeout(type, 200); // speed of typing
}

type();
