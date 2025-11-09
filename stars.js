const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < 300; i++) {
  stars.push({
    x: random(0, canvas.width),
    y: random(0, canvas.height),
    radius: random(0.5, 2),
    alpha: random(0.3, 1),
    speed: random(0.01, 0.05),
    color: `hsl(${random(200, 250)}, 100%, 80%)`
  });
}

// Nebula overlay
const nebula = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width);
nebula.addColorStop(0, 'rgba(40,20,80,0.2)');
nebula.addColorStop(0.5, 'rgba(80,20,120,0.1)');
nebula.addColorStop(1, 'rgba(0,0,0,0.3)');

function animate() {
  ctx.fillStyle = "#000010";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = nebula;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.shadowColor = star.color;
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
