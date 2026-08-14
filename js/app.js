async function loadTemplate(path) {

    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`Failed to load template: ${path}`);
    }

    return await response.text();
}


async function renderNavbar() {

    const source = await loadTemplate(
        "templates/partials/navbar.hbs"
    );

    const template =
        Handlebars.compile(source);

    const html =
        template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            html
        );

    // IMPORTANT
    initNavbar();
}


async function renderHero() {

    const heroSource =
        await loadTemplate(
            "templates/partials/hero.hbs"
        );

    const heroTemplate =
        Handlebars.compile(heroSource);

    const heroHtml =
        heroTemplate(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            heroHtml
        );

    // Hero HTML render hone ke baad
    initHeroCarousel();
}



async function renderMarquee() {

    const source = await loadTemplate(
        "templates/partials/marquee.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            html
        );
}

async function renderFeatures() {

    const source = await loadTemplate(
        "templates/partials/features.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            html
        );
}




async function renderFeatureTabs() {

    const source =
        await loadTemplate(
            "templates/partials/features-tabs.hbs"
        );

    const template =
        Handlebars.compile(source);

    const html =
        template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            html
        );

    initFeatureTabs();
}


async function renderServices() {

    const source = await loadTemplate(
        "templates/partials/services.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            html
        );
}


async function renderHowItWorks() {

    const source = await loadTemplate(
        "templates/partials/how-it-works.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            html
        );
}


async function renderKiosk() {

    const source = await loadTemplate(
        "templates/partials/kiosk.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            html
        );
}


async function renderAnnouncement() {

    const source = await loadTemplate(
        "templates/partials/announcement.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML("beforeend", html);
}



async function renderdownloadapp() {
    const source = await loadTemplate(
        "templates/partials/download-app.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML("beforeend", html);
}

async function renderFAQ() {

    const source = await loadTemplate(
        "templates/partials/faq.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            html
        );

    // FAQ HTML render hone ke baad
    initFAQ();
}

// faq(accordion) k liye logic 


function initFAQ() {

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {

        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;
            const icon = question.querySelector(".faq-icon");

            // Close all other FAQs
            document.querySelectorAll(".faq-answer").forEach((item) => {
                if (item !== answer) {
                    item.classList.add("hidden");
                }
            });

            document.querySelectorAll(".faq-icon").forEach((item) => {
                if (item !== icon) {
                    item.textContent = "+";
                    item.classList.remove("rotate-45");
                }
            });

            // Toggle current FAQ
            answer.classList.toggle("hidden");

            if (answer.classList.contains("hidden")) {
                icon.textContent = "+";
                icon.classList.remove("rotate-45");
            } else {
                icon.textContent = "×";
                icon.classList.add("rotate-45");
            }

        });

    });

}


async function renderAppStore() {
    const source = await loadTemplate(
        "templates/partials/app-store.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML("beforeend", html);
}

async function renderFooter() {

    const source = await loadTemplate(
        "templates/partials/footer.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            html
        );
}

function initScrollReveal() {

    const sections = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
}

// Modal for Download button which is in Navbar ko render kiya h ---------------------------------------

async function renderDownloadModal() {

    const source = await loadTemplate(
        "templates/partials/download-modal.hbs"
    );

    const template = Handlebars.compile(source);

    const html = template(siteData);

    document
        .getElementById("app")
        .insertAdjacentHTML(
            "beforeend",
            html
        );

    initDownloadModal();
}


// logic for Modal ------------------------------------------------------------

function initDownloadModal() {

    const downloadButton =
        document.getElementById("download-app");

    const modal =
        document.getElementById("download-modal");

    const closeButton =
        document.getElementById("close-download-modal");


    if (!downloadButton || !modal || !closeButton) {
        return;
    }


    // Open Modal
    downloadButton.addEventListener("click", () => {

        modal.classList.remove("hidden");

        document.body.classList.add("overflow-hidden");

    });


    // Close Modal
    closeButton.addEventListener("click", () => {

        modal.classList.add("hidden");

        document.body.classList.remove("overflow-hidden");
        

    });


    // Close when clicking outside modal
    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.classList.add("hidden");

            document.body.classList.remove("overflow-hidden");

        }

    });

}



async function initApp() {

    await renderNavbar();

    await renderDownloadModal();

    await renderHero();

    await renderMarquee();

    await renderFeatures();

    await renderFeatureTabs();

    await renderServices();

    await renderHowItWorks();

    await renderKiosk();

    await renderAnnouncement();

    await renderdownloadapp();

    await renderFAQ();

    await renderAppStore();

    await renderFooter();


        initScrollReveal();




}


initApp();