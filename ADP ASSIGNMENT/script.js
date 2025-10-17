const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4',];

let index = 0;
nextButton.addEventListener('click', function(){
    index += 1
    video.src = movieList[index];

    if (index === 3){
        index = -1;
    }

})


// document.addEventListener("DOMContentLoaded", () => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       const el = entry.target;

//       if (entry.isIntersecting) {
//         el.classList.add("visible");
//         el.classList.remove("exiting");
//       } else {
//         el.classList.remove("visible");
//         el.classList.add("exiting");
//       }
//     });
//   }, {
//     threshold: 0.3 // Adjust sensitivity
//   });

//   document.querySelectorAll(".autoDisplay").forEach(el => {
//     observer.observe(el);
//   });
// });