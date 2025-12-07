// CONFETTI SCRIPT
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];

function randomColor() {
    const colors = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        speed: Math.random() * 4 + 2,
        color: randomColor(),
        tilt: Math.random() * 10 - 5
    };
}

for (let i = 0; i < 200; i++) {
    confettiParticles.push(createConfetti());
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiParticles.forEach(p => {
        p.y += p.speed;
        p.x += Math.sin(p.tilt);
        
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animateConfetti);
}

animateConfetti();