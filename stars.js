const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Create stars
for (let i = 0; i < 300; i++) {
  stars.push({
    x: random(0, canvas.width),
    y: random(0, canvas.height),
    radius: random(0.5, 2),
    alpha: random(0.3, 1),
    speed: random(0.01, 0.05)
  });
}

// Animate stars
function animate() {
  ctx.fillStyle = "rgba(0, 0, 10, 0.8)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.shadowColor = "white";
    ctx.shadowBlur = 5;
    ctx.fill();

    star.alpha += star.speed * (Math.random() > 0.5 ? 1 : -1);
    if (star.alpha <= 0.3 || star.alpha >= 1) star.speed *= -1;
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
