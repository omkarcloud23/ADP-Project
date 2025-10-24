function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

page4Animation()
loaderAnimation()

const image = document.querySelector('.scroll-image');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const scale = 1 + scrollPos / 2000;  // adjust 2000 to control speed
    image.style.transform = `scale(${scale})`;
});

let latestScroll = 0;
window.addEventListener('scroll', () => latestScroll = window.scrollY);

function animate() {
    const scale = 1 + latestScroll / 2000;
    image.style.transform = `scale(${scale})`;
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
