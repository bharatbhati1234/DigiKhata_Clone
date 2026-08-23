function initNavbar() {

    // =====================================
    // Desktop Dropdown - Hover
    // =====================================

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {

        const button = item.querySelector(".dropdown-toggle");
        const dropdown = item.querySelector(".dropdown-menu");
        const arrow = item.querySelector(".dropdown-arrow");

        if (!button || !dropdown) return;


        // Mouse enter -> Open dropdown
        item.addEventListener("mouseenter", () => {

            // Close all other dropdowns
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {

                if (menu !== dropdown) {
                    menu.classList.add("hidden");
                }

            });

            // Reset all other arrows
            document.querySelectorAll(".dropdown-arrow").forEach((otherArrow) => {

                if (otherArrow !== arrow) {
                    otherArrow.classList.remove("rotate-180");
                }

            });


            // Open current dropdown
            dropdown.classList.remove("hidden");

            if (arrow) {
                arrow.classList.add("rotate-180");
            }

        });


        // Mouse leave -> Close dropdown
        item.addEventListener("mouseleave", () => {

            dropdown.classList.add("hidden");

            if (arrow) {
                arrow.classList.remove("rotate-180");
            }

        });

    });



    // =====================================
    // Mobile Menu
    // =====================================

    const mobileButton =
        document.getElementById("mobile-menu-button");

    const mobileMenu =
        document.getElementById("mobile-menu");


    if (mobileButton && mobileMenu) {

        mobileButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("hidden");

            const isOpen =
                !mobileMenu.classList.contains("hidden");

            mobileButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }



    // =====================================
    // Mobile Dropdown
    // =====================================

    const mobileDropdownButtons =
        document.querySelectorAll(
            ".mobile-dropdown-toggle"
        );


    mobileDropdownButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const dropdown =
                button.nextElementSibling;

            dropdown.classList.toggle("hidden");

        });

    });



    // =====================================
    // Accessibility
    // =====================================

    initAccessibility();

}



function initAccessibility() {

    const buttons =
        document.querySelectorAll(
            ".accessibility-btn"
        );


    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const action =
                button.dataset.action;


            if (action === "increase") {

                changeFontSize(1);

            }


            if (action === "decrease") {

                changeFontSize(-1);

            }


            if (action === "reset") {

                resetAccessibility();

            }


            if (action === "theme") {

                toggleTheme();

            }

        });

    });

}



let currentFontSize = 16;



function changeFontSize(amount) {

    currentFontSize += amount;


    if (currentFontSize < 12) {
        currentFontSize = 12;
    }


    if (currentFontSize > 24) {
        currentFontSize = 24;
    }


    document.documentElement.style.fontSize =
        `${currentFontSize}px`;

}



function resetAccessibility() {

    currentFontSize = 16;

    document.documentElement.style.fontSize =
        "16px";

    document.body.classList.remove(
        "dark-mode"
    );

}



function toggleTheme() {

    document.body.classList.toggle(
        "dark-mode"
    );

}