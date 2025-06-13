// ==== Typing Animation with Fade In/Out ====
document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".typing-text");
  const roles = [
    "Java Developer",
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
    "Video Editor"
  ];
  let i = 0;

  function showRole() {
    text.classList.remove("fade-in");
    text.classList.add("fade-out");

    setTimeout(() => {
      text.textContent = roles[i];
      text.classList.remove("fade-out");
      text.classList.add("fade-in");
      i = (i + 1) % roles.length;
    }, 500);
  }

  setInterval(showRole, 3000);
  showRole();
});

// ==== Falling Stars with Blast ====
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let bursts = [];

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    velocityX: Math.random() * 0.8 + 0.2,
    velocityY: Math.random() * 0.8 + 0.2,
  });
}

function createBurst(x, y) {
  let particles = [];
  for (let i = 0; i < 10; i++) {
    particles.push({
      x,
      y,
      radius: Math.random() * 1.5 + 0.5,
      velocityX: (Math.random() - 0.5) * 4,
      velocityY: -(Math.random() * 2 + 1),
      alpha: 1,
    });
  }
  bursts.push(...particles);
}

function drawStarsAndBursts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    star.x += star.velocityX;
    star.y += star.velocityY;

    if (star.y > canvas.height || star.x > canvas.width) {
      createBurst(star.x, star.y);
      star.x = 0;
      star.y = 0;
    }
  });

  bursts = bursts.filter(p => p.alpha > 0);
  bursts.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
    ctx.fill();
    p.x += p.velocityX;
    p.y += p.velocityY;
    p.velocityY += 0.05;
    p.alpha -= 0.02;
  });

  requestAnimationFrame(drawStarsAndBursts);
}

drawStarsAndBursts();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ==== Contact Form Animation ====
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  const btn = form.querySelector("button");
  btn.textContent = "Sending...";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = "Message Sent!";
    btn.style.backgroundColor = "green";
    setTimeout(() => {
      btn.textContent = "Send Message";
      btn.style.backgroundColor = "#87CEEB";
      btn.disabled = false;
      form.reset();
    }, 3000);
  }, 1500);
});
