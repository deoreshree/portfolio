// ==========================================
// SHREE DEORE PORTFOLIO - script.js
// Part 1 : Navbar + Mobile Menu + Active Link
// ==========================================

// ===========================
// Navbar Scroll Effect
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#08111f";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background = "rgba(10,20,35,0.9)";
        navbar.style.boxShadow = "none";

    }

});

// ===========================
// Mobile Menu
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ===========================
// Close Menu After Click
// ===========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks.classList.contains("active")) {

            navLinks.classList.remove("active");

        }

    });

});

// ===========================
// Active Navigation Link
// ===========================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===========================
// Console Message
// ===========================

console.log("🚀 Shree Deore Portfolio Loaded Successfully");
// ==========================================
// SHREE DEORE PORTFOLIO - script.js
// Part 2 : Typing Effect + Fade Animation
// ==========================================

// ===========================
// Typing Effect
// ===========================

const typingElement = document.querySelector(".hero h2");

const words = [

    "AI & Machine Learning Student",

    "Python Developer",

    "Flutter Developer",

    "Web Developer"

];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typingAnimation() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typingAnimation, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingAnimation, isDeleting ? 60 : 120);

}

typingAnimation();


// ===========================
// Fade In Animation
// ===========================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

},

{

    threshold: 0.15

}

);

document.querySelectorAll("section").forEach((section) => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});


// ===========================
// Card Hover Animation
// ===========================

const cards = document.querySelectorAll(

".card, .project-card, .academic-card"

);

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});


// ===========================
// Image Animation
// ===========================

const heroImage = document.querySelector(".hero-image");

if (heroImage) {

    heroImage.animate(

        [

            {

                transform: "translateY(0px)"

            },

            {

                transform: "translateY(-12px)"

            },

            {

                transform: "translateY(0px)"

            }

        ],

        {

            duration: 3000,

            iterations: Infinity

        }

    );

}
// ==========================================
// SHREE DEORE PORTFOLIO
// Part 3 : Cursor Light + Scroll Top +
// Progress Bar + Loading Animation
// ==========================================

// ===========================
// Cursor Light Effect
// ===========================

const cursorLight = document.querySelector(".cursor-light");

if (cursorLight) {

    document.addEventListener("mousemove", (e) => {

        cursorLight.style.left = e.clientX + "px";
        cursorLight.style.top = e.clientY + "px";

    });

}

// ===========================
// Scroll To Top Button
// ===========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#3B82F6";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "9999";
topButton.style.boxShadow = "0 0 20px rgba(59,130,246,.5)";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===========================
// Section Animation Delay
// ===========================

const allCards = document.querySelectorAll(

".card,.project-card,.academic-card"

);

allCards.forEach((card, index) => {

    card.style.animation = `fadeUp 0.8s ease ${index * 0.1}s forwards`;

});

// ===========================
// Navbar Shadow
// ===========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// ===========================
// Page Loading Animation
// ===========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ===========================
// Console Message
// ===========================

console.log("🚀 Welcome to Shree Deore Portfolio");

console.log("✨ Built with HTML CSS JavaScript");

console.log("📱 Fully Responsive");

console.log("🤖 AI & Machine Learning Student");