// ================================
// Script for Spider-Man Web Project
// ================================

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

    // Hero Heading Animation on Page Load
    const heroLeft = document.querySelector(".hero-heading .l");
    const heroRight = document.querySelector(".hero-heading .r");

    if (heroLeft && heroRight) {
        heroLeft.style.transform = "translateX(-200px)";
        heroLeft.style.opacity = "0";
        heroRight.style.transform = "translateX(200px)";
        heroRight.style.opacity = "0";

        setTimeout(() => {
            heroLeft.style.transition = "all 1s ease";
            heroLeft.style.transform = "translateX(0)";
            heroLeft.style.opacity = "1";

            heroRight.style.transition = "all 1s ease";
            heroRight.style.transform = "translateX(0)";
            heroRight.style.opacity = "1";
        }, 100);
    }

    // Story Cards Auto Display on Scroll
    const storyCards = document.querySelectorAll(".card");
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 0.8s ease";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    storyCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        observer.observe(card);
    });

    // Abilities Hover Effect
    const elems = document.querySelectorAll(".elem");
    elems.forEach(elem => {
        elem.addEventListener("mouseenter", () => {
            const img = elem.dataset.image;
            const fixedImg = document.getElementById("fixed-image");
            fixedImg.style.backgroundImage = `url('${img}')`;
            fixedImg.style.display = "block";
        });
        elem.addEventListener("mouseleave", () => {
            const fixedImg = document.getElementById("fixed-image");
            fixedImg.style.display = "none";
        });
    });

});
