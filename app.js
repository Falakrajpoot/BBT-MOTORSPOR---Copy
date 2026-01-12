const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.onclick = () => menu.classList.toggle("active");
menu.onclick = () => menu.classList.remove("active");

// Image changer: cycles the hero image automatically and via prev/next buttons
const images = [
	"img/1.jpg",
	"img/4.jpg",
	"img/6.jpg"
];

const hero = document.getElementById("heroImage");
let current = 0;

// Auto-rotate controls
let autoTimer = null;
const AUTO_INTERVAL = 2000; // 2 seconds

function showImage(index) {
	if (!hero) return;
	current = (index + images.length) % images.length;
	hero.src = images[current];
}

function startAutoRotate() {
	stopAutoRotate();
	autoTimer = setInterval(() => showImage(current + 1), AUTO_INTERVAL);
}

function stopAutoRotate() {
	if (autoTimer) {
		clearInterval(autoTimer);
		autoTimer = null;
	}
}

function restartAutoRotate() {
	stopAutoRotate();
	startAutoRotate();
}

const prevBtn = document.getElementById("prevImg");
const nextBtn = document.getElementById("nextImg");

if (prevBtn) prevBtn.addEventListener("click", () => { showImage(current - 1); restartAutoRotate(); });
if (nextBtn) nextBtn.addEventListener("click", () => { showImage(current + 1); restartAutoRotate(); });

// Optional: allow left/right arrow keys to navigate and restart timer
window.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft") { showImage(current - 1); restartAutoRotate(); }
	if (e.key === "ArrowRight") { showImage(current + 1); restartAutoRotate(); }
});
// Initialize hero image and start auto-rotation on DOM load
document.addEventListener('DOMContentLoaded', () => {
	showImage(0);
	startAutoRotate();
});