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

    const questions =
        document.querySelectorAll(".faq-question");

    questions.forEach((question) => {

        question.addEventListener("click", () => {

            const answer =
                question.nextElementSibling;

            const icon =
                question.querySelector(".faq-icon");

            const title =
                question.querySelector(".faq-title");

            const faqIcon =
                question.querySelector(".fa-question");


            const isOpen =
                !answer.classList.contains("hidden");


            // Close all FAQs
            document.querySelectorAll(".faq-answer")
                .forEach((item) => {
                    item.classList.add("hidden");
                });

            document.querySelectorAll(".faq-icon")
                .forEach((item) => {
                    item.textContent = "+";
                });

            document.querySelectorAll(".faq-title")
                .forEach((item) => {
                    item.classList.remove("text-[#416BFA]");
                });

            document.querySelectorAll(".fa-question")
                .forEach((item) => {
                    item.classList.remove(
                        "text-white",
                        "bg-[#416BFA]"
                    );
                });


            // Open clicked FAQ
            if (!isOpen) {

                answer.classList.remove("hidden");

                icon.textContent = "−";

                title.classList.add(
                    "text-[#416BFA]"
                );

                faqIcon.classList.add(
                    "text-white",
                    "bg-[#416BFA]"
                );

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

    const mobileDownloadButton =
        document.getElementById("download-app-mobile");

    const modal =
        document.getElementById("download-modal");

    const modalContent =
        document.getElementById("download-modal-content");

    const closeButton =
        document.getElementById("close-download-modal");


    if (!modal || !closeButton) {
        return;
    }


    // =========================
    // OPEN MODAL
    // =========================

    function openModal() {

        modal.classList.remove("hidden");

        document.body.classList.add("overflow-hidden");

        setTimeout(() => {

            if (modalContent) {

                modalContent.classList.remove(
                    "-translate-y-20",
                    "opacity-0"
                );

                modalContent.classList.add(
                    "translate-y-0",
                    "opacity-100"
                );

            }

        }, 10);

    }


    // =========================
    // DESKTOP DOWNLOAD
    // =========================

    if (downloadButton) {

        downloadButton.addEventListener(
            "click",
            openModal
        );

    }


    // =========================
    // MOBILE DOWNLOAD
    // =========================

    if (mobileDownloadButton) {

        mobileDownloadButton.addEventListener(
            "click",
            openModal
        );

    }


    // =========================
    // CLOSE MODAL
    // =========================

    function closeModal() {

        if (modalContent) {

            modalContent.classList.remove(
                "translate-y-0",
                "opacity-100"
            );

            modalContent.classList.add(
                "-translate-y-20",
                "opacity-0"
            );

        }

        setTimeout(() => {

            modal.classList.add("hidden");

            document.body.classList.remove(
                "overflow-hidden"
            );

        }, 500);

    }


    closeButton.addEventListener(
        "click",
        closeModal
    );


    // Click outside
    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeModal();

        }

    });

}




// -------------------------------- For Business menu k under k pages ---------------------------------------------------------------

// Navbar k under for business menu k under digi kiosk page hai uska section hai -------------------------


async function renderDigiKioskHero() {

    const source = await loadTemplate(
        "templates/partials/digi-kiosk-hero.hbs"
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

}


async function renderDigiKioskBenefits() {

    const source = await loadTemplate(
        "templates/partials/digi-kiosk-benefits.hbs"
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

}


async function renderDigiKioskServices() {

    const source = await loadTemplate(
        "templates/partials/digi-kiosk-services.hbs"
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

}



async function renderDigiKioskSecurity() {

    const source = await loadTemplate(
        "templates/partials/digi-kiosk-security.hbs"
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

}



async function renderDigiKioskCta() {

    const source = await loadTemplate(
        "templates/partials/digi-kiosk-cta.hbs"
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

}





// Navbar k under for business menu k under digi kiosk page hai uska section hai -------------------------


async function renderDigiVyapaarHero() {

    const source = await loadTemplate(
        "templates/partials/digi-vyapaar-hero.hbs"
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

}





async function renderDigiVyapaarBenefits() {

    const source = await loadTemplate(
        "templates/partials/digi-vyapaar-benefits.hbs"
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

}




async function renderDigivyapaarCta() {

    const source = await loadTemplate(
        "templates/partials/digi-vyapaar-cta.hbs"
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

}





// Navbar k under for business menu k under digikhata upi page hai uska section hai -------------------------


async function renderDigiKhataUPIHero() {

    const source = await loadTemplate(
        "templates/partials/digikhata-upi-hero.hbs"
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

}




async function renderDigiKhataUPITestimonials() {

    const source = await loadTemplate(
        "templates/partials/digikhata-upi-testimonials.hbs"
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

}





async function renderDigiKhataUPISolutions() {

    const source = await loadTemplate(
        "templates/partials/digikhata-upi-solutions.hbs"
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

}



async function renderDigiKhataUPIForm() {

    const source = await loadTemplate(
        "templates/partials/digikhata-upi-form.hbs"
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

}





// Navbar k under for business menu k under network collaborator page hai uska section hai -------------------------


async function rendernetworkCollaboratorHero() {

    const source = await loadTemplate(
        "templates/partials/network-collaborator-hero.hbs"
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

}



async function rendernetworkCollaboratorFeatures() {

    const source = await loadTemplate(
        "templates/partials/network-collaborator-features.hbs"
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

}



async function initApp() {

    await renderNavbar();                  //  ye sab pages me esliye eder rakha hai 
    await renderDownloadModal();           // ye sab pages me esliye eder rakha hai 

    const path = window.location.pathname;

    // Home page
    if (
        path === "/" ||
        path.endsWith("index.html")
    ) {

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

    }

    // for Business menu k ander:-  Digi Kiosk page

    else if (path.endsWith("digi-kiosk.html")) {

        await renderDigiKioskHero();

        await renderDigiKioskBenefits();

        await renderDigiKioskServices();


        await renderDigiKioskSecurity();


        await renderDigiKioskCta();     

    }



    // For Business menu k ander:-  Digi Vyapaar page --------------------------------------



    else if (path.endsWith("digi-vyapaar.html")){

        
        await renderDigiVyapaarHero();

        await renderDigiVyapaarBenefits();

        await renderDigiKioskSecurity();               // ye digi kiosk page ka he section hai reuse kiya hai khali call kiya hai   

        await renderDigivyapaarCta();

       




    }




    // For Business menu k ander:-  DigiKhata UPI page --------------------------------------



    else if (path.endsWith("digikhata-upi.html")){

        
        await renderDigiKhataUPIHero();

        await renderDigiKhataUPITestimonials();


         await renderDigiKhataUPISolutions();

         await renderDigiKhataUPIForm();

        




    }



    // For Business menu k ander:-  Network Collaborator page --------------------------------------




    else if(path.endsWith("network-collaborator.html")){

        await rendernetworkCollaboratorHero();

        await rendernetworkCollaboratorFeatures();
    }









    await renderAppStore();       // ye sab pages me hai esliye eder rakha hai 

    await renderFooter();       //  ye sab pages me hai esliye eder rakha hai 




    initScrollReveal();
}

initApp();