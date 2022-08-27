const sr = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.section1', { delay: 100 });
ScrollReveal().reveal('.section2', { delay: 100, origin: "right" });
ScrollReveal().reveal('.section3', { delay: 100 });
ScrollReveal().reveal('.section4', { delay: 100 });
