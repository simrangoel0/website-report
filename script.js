document.addEventListener("DOMContentLoaded", function () {
    const slideInElements = document.querySelectorAll(".slide-in");

    function checkVisibility() {
        slideInElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.85) {
                element.classList.add("visible");
            }
        });
    }

    // Run on scroll
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on page load for already visible elements
});
