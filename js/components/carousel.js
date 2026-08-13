function initHeroCarousel() {

    const slides =
        document.querySelectorAll(
            ".hero-slide"
        );

    const dots =
        document.querySelectorAll(
            ".hero-dot"
        );

    const prevButton =
        document.getElementById(
            "hero-prev"
        );

    const nextButton =
        document.getElementById(
            "hero-next"
        );


    if (!slides.length) {
        return;
    }


    let currentSlide = 0;


    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        }

        else if (index < 0) {
            currentSlide = slides.length - 1;
        }

        else {
            currentSlide = index;
        }


        // Hide all slides

        slides.forEach((slide) => {

            slide.classList.add(
                "opacity-0",
                "invisible"
            );

            slide.classList.remove(
                "opacity-100",
                "visible"
            );

        });


        // Show current slide

        slides[currentSlide].classList.remove(
            "opacity-0",
            "invisible"
        );

        slides[currentSlide].classList.add(
            "opacity-100",
            "visible"
        );


        // Reset dots

        dots.forEach((dot) => {

            dot.classList.remove(
                "bg-[#416BFA]",
                "w-8"
            );

            dot.classList.add(
                "bg-gray-300",
                "w-3"
            );

        });


        // Active dot

        if (dots[currentSlide]) {

            dots[currentSlide].classList.remove(
                "bg-gray-300",
                "w-3"
            );

            dots[currentSlide].classList.add(
                "bg-[#416BFA]",
                "w-8"
            );

        }

    }


    // Previous

    prevButton.addEventListener(
        "click",
        () => {

            showSlide(currentSlide - 1);

        }
    );


    // Next

    nextButton.addEventListener(
        "click",
        () => {

            showSlide(currentSlide + 1);

        }
    );


    // Dots

    dots.forEach((dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                showSlide(index);

            }
        );

    });


    // Initial slide

    showSlide(0);


    // Auto slide

    setInterval(() => {

        showSlide(currentSlide + 1);

    }, 5000);

}