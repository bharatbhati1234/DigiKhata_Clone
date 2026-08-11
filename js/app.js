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




async function initApp() {

    await renderNavbar();

    await renderHero();

    await renderMarquee();

    await renderFeatures();

    await renderFeatureTabs();

    await renderServices();

    await renderHowItWorks();

    await renderKiosk();

    await renderAnnouncement();

    await renderAppStore();

    await renderFooter();

        initScrollReveal();




}


initApp();