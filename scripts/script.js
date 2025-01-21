// Confetti effect on page load
window.onload = function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });
};

// Countdown Timer
const countDownDate = new Date("Jan 22, 2025 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "HAPPY BIRTHDAY, IFAA! 🎉";
    }
}, 1000);

// Quote of the Day
const quotes = [
    "Setiap hari adalah kesempatan baru untuk mencintaimu lebih dalam.",
    "Ulang tahunmu adalah kesempatan bagi aku untuk mengingatkanmu betapa berharganya dirimu.",
    "Aku bersyukur bisa merayakan momen ini bersamamu, sayang."
];
document.getElementById('quote').innerText = quotes[Math.floor(Math.random() * quotes.length)];

// Message reveal on button click
document.getElementById('openMessageBtn').onclick = function() {
    document.getElementById('extraMessage').style.display = 'block';
    this.style.display = 'none';
};
