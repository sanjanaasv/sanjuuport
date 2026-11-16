
// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// Typing Animation

const typingText = document.getElementById("typing");

const words = [
    "B.Tech Student",
    "Technology Enthusiast",
    "Creative Learner",
    "Future Innovator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

    }


    let speed = deleting ? 60 : 120;


    if (!deleting && charIndex === currentWord.length) {

        deleting = true;
        speed = 1200;

    }

    else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }


    setTimeout(typeEffect, speed);

}

typeEffect();


// Reveal sections on scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll(".section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

