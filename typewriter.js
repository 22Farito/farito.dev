const text = "Developer";
const typewriter = document.getElementById("typewriter");
let index = 0;
let forward = true;

function type() {
  if (forward) {
    typewriter.textContent = text.slice(0, index + 1);
    index++;
    if (index === text.length) {
      forward = false;
      setTimeout(type, 500); // pause 0.5s at the end
      return;
    }
  } else {
    typewriter.textContent = text.slice(0, index);
    index--;
    if (index < 0) {
      forward = true;
    }
  }
  setTimeout(type, 200);
}

type();
