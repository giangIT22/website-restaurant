window.addEventListener("scroll", function() {
    var heading__navbar = document.querySelector(".heading__navbar");
    heading__navbar.classList.toggle("stickey", window.scrollY > 0);
});

$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
        pagination: true,
        autoPlay: true
    });
});