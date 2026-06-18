// ==========================
// Portfolio JavaScript
// ==========================

// Navbar Scroll Effect

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#08111f";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background = "rgba(10,20,35,0.9)";
        navbar.style.boxShadow = "none";

    }

});

// ==========================
// Active Navigation Link
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// Typing Effect
// ==========================

const typingText = [

    "AI & Machine Learning Student",

    "Python Developer",

    "Flutter Developer",

    "Web Developer"

];

let index = 0;
let charIndex = 0;

const title = document.querySelector(".hero h2");

function typeEffect() {

    if (!title) return;

    if (charIndex < typingText[index].length) {

        title.textContent += typingText[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        title.textContent = typingText[index].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        index++;

        if (index >= typingText.length) {

            index = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

title.textContent = "";

typeEffect();

// ==========================
// Fade Animation
// ==========================

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

    threshold: 0.2,

}

);

document.querySelectorAll("section").forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s";

    observer.observe(section);

});

// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#3b82f6";
topBtn.style.color = "white";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// Console Message
// ==========================

console.log("🚀 Shree Deore Portfolio Loaded Successfully");
const light = document.querySelector(".cursor-light");

document.addEventListener("mousemove",function(e){

    light.style.left = e.clientX + "px";

    light.style.top = e.clientY + "px";

});
const text = [

"AI & ML Student",

"Flutter Developer",

"Web Developer",

"Python Developer"

];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

(function type(){

    if(count === text.length){

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0,++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1500);

    }

    else{

        setTimeout(type,100);

    }

})();