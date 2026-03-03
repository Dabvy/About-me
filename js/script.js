// ===============================
// Smooth Scroll for Navigation
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===============================
// Active Nav Link on Scroll
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ===============================
// Sticky Header on Scroll
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});


// ===============================
// Scroll Reveal Animation
// ===============================
const cards = document.querySelectorAll(".card");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===============================
// GitHub Buttons (Example Links)
// ===============================
const githubButtons = document.querySelectorAll(".card .secondary");

githubButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index === 0) {
            window.open("https://github.com/yourusername/kennisbank", "_blank");
        } else if (index === 1) {
            window.open("https://github.com/yourusername/portfolio", "_blank");
        }
    });
});