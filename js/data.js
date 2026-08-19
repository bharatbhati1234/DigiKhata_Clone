const siteData = {

    companyName: "DigiKhata",

    logo: "../assets/images/logo.png",

    // Your existing navigation...
    navigation: [
        {
            name: "For Business",
            dropdown: true,
            items: [
                {
                    name: "Digi Kiosk",
                    link: "/digi-kiosk.html"
                },
                {
                    name: "Digi Vyapaar",
                    link: "/digi-vyapaar.html"
                },
                {
                    name: "Digikhata UPI",
                    link: "/digikhata-upi.html"
                },
                {
                    name: "Network Collaborator",
                    link: "/network-collaborator.html"
                },
                {
                    name: "Enterprise Solutions",
                    link: "/for-business/enterprisesolutions"
                },
                {
                    name: "Gift Card",
                    link: "/for-business/giftcard"
                },
                {
                    name: "Expense Management",
                    link: "/for-business/expensemanagement"
                },
                {
                    name: "Cobrand Pre-paid Card",
                    link: "/for-business/pfacobrand"
                }
            ]
        },

        {
            name: "For Individuals",
            dropdown: true,
            items: [
                {
                    name: "Instant UPI account",
                    link: "/product/instant-upi-account"
                },
                {
                    name: "Instant Rupay Card",
                    link: "/product/prepaid-card"
                },
                {
                    name: "Multilingual Mobile App",
                    link: "/product/mobile-app"
                },
                {
                    name: "DigiKhata Metro Card",
                    link: "/product/digikhata-metro-card"
                }
            ]
        },

        {
            name: "Blogs",
            link: "/blogs"
        },

        {
            name: "Log In",
            dropdown: true,
            items: [
                {
                    name: "PrePaid Card",
                    link: "https://cards.digikhata.in/account/login",
                    external: true
                },
                {
                    name: "Gift Card",
                    link: "https://giftcards.digikhata.in/Account/Login",
                    external: true
                }
            ]
        }
    ],

    downloadButton: {
        text: "Download Our App"
    },




    downloadModal: {
    title: "Download Our App",

    closeIcon: "assets/images/close_icon.svg",
    closeAlt: "Close",

    googlePlay: {
        link: "https://play.google.com/store/apps/details?id=com.paypointz.wallet&pcampaignid=web_share",
        image: "assets/images/google-play.png",
        alt: "Get it on Google Play"
    },

    appleStore: {
        link: "https://apps.apple.com/in/app/digi-khata/id1194920306",
        image: "assets/images/apple-store.png",
        alt: "Download on the App Store"
    }
},


    // =========================
    // HERO SLIDES
    // =========================

    heroSlides: [

        {
            category: "Professionals",

            title: "UPI khata without a bank account in 2 mins",

            description:
                "Experience free digital pre-paid account opening with instant account activation in 2 minutes. Get started now!",

            buttonText: "Read more",

            link: "/for-business/professionals",

            image: "assets/images/Professionals.png",

            imageAlt:
                "Free Pre-paid Digital Account for Professionals"
        },


        {
            category: "Students",

            title: "UPI khata without a bank account in 2 mins",

            description:
                "Zero minimum balance. UPI handle without a Bank Account. Welcome to a new, magical way of payments.",

            buttonText: "Read more",

            link: "/for-business/students",

            image: "assets/images/Students.png",

            imageAlt:
                "Zero Balance Account for Student"
        },


        {
            category: "Homemakers",

            title: "UPI khata without a bank account in 2 mins",

            description:
                "Securely save your money in your digital sandook(संदूक). Say bye bye to taanashahi(तानाशाही) and Say hello to Digi Khata.",

            buttonText: "Read more",

            link: "/for-business/homemakers",

            image: "assets/images/Homemakers.png",

            imageAlt:
                "Free Digital Account for Homemakers"
        },


        {
            category: "Elders",

            title: "UPI khata without a bank account in 2 mins",

            description:
                "The freedom to transact without worrying about your bank account getting hacked. What you load, is what you get.",

            buttonText: "Read more",

            link: "/for-business/elders",

            image: "assets/images/Elders.png",

            imageAlt:
                "Digital Pre-Paid Account for Elders"
        }


        

    ],

        marqueeItems: [
        "UPI WITHOUT BANK ACCOUNT",
        "ZERO MINIMUM BALANCE",
        "RBI APPROVED PPI WALLET",
        "DEPOSIT CASH",
        "WITHDRAW CASH",
        "UPI WITHOUT BANK ACCOUNT",
        "ZERO MINIMUM BALANCE"
    ],



    features: [
    {
        title: "A personalized UPI handle & QR",
        description: "Get your UPI Khata in 2 minutes. Scan and Pay merchants and businesses, and your friends alike. Pay bills, Recharge, fuel, all of it on Digi Khata.",
        buttonText: "Explore more",
        link: "/product/instant-upi-account",
        image: "assets/images/upi-website-image.png",
        imageAlt: "instant upi account",
        reverse: false
    },

    {
        title: "Secure Rupay Card with tap & pay",
        description: "The Digi Khata RuPay card is your welcome to convenience. Works everywhere with a tap, swipe and chip! Tap and pay to skip the queue at metro stations, travel ticketless!",
        buttonText: "Explore more",
        link: "/product/prepaid-card",
        image: "assets/images/Home-PrepaidCard.png",
        imageAlt: "Secure Rupay Card",
        reverse: true
    },

    {
        title: "Simple and easy to use Multilingual App",
        description: "In a sea of complex, cluttered UPI apps, DigiKhata is simple, multi-lingual, intuitive and secure. Switch your card and UPI on|off from your app.",
        buttonText: "Explore more",
        link: "/product/mobile-app",
        image: "assets/images/Home-MobileApplication.png",
        imageAlt: "DigiKhata mobile application",
        reverse: false
    }
],


featuresSection: {
    label: "Features",

    title: "Features of Instant Pre-paid Account",

    description:
        "Explore a constantly growing list of features that keep you, the customer, as the center of our attention.",

    tabs: [
        {
            id: "DigitalAccount",
            title: "Pre-paid Account",
            image: "assets/images/Digital.png"
        },
        {
            id: "CashLoading",
            title: "Cash Loading",
            image: "assets/images/Cash.png"
        },
        {
            id: "CashWithdrawal",
            title: "Cash Withdrawal",
            image: "assets/images/cash (2).png"
        },
        {
            id: "MoneyTransfer",
            title: "Fund Transfer",
            image: "assets/images/Money.png"
        }
    ],

    buttonText: "View all features",

    buttonLink: "/features"
},




    servicesSection: {
    label: "Services",
    title: "Financial services for your needs",
    description:
        "Experience unparalleled financial services and offerings thoughtfully designed to meet your diverse needs."
    },

services: [
    {
        title: "Mobile Recharge",
        image: "assets/images/financial.png"
    },
    {
        title: "Bill Payment",
        image: "assets/images/booking.png"
    },
    {
        title: "Money Transfer",
        image: "assets/images/recharges.png"
    },
    {
        title: "Digi Khata Card",
        image: "assets/images/bill.png"
    },
    {
        title: "Insurance",
        image: "assets/images/insuarance.png"
    },
    {
        title: "Digi Kiosk",
        image: "assets/images/loans.png"
    }
],


    howItWorks: {
    label: "How it works",

    title: "Create a Digi Khata instantly with absolutely no hassle",

    steps: [
        {
            number: 1,
            title: "Instant Wallet opening",
            description:
                "Open a pre-paid account by downloading our app or visit a Digi Kiosk in your neighborhood.",
            image: "assets/images/create_account.png"
        },

        {
            number: 2,
            title: "Easy KYC",
            description:
                "No photo, forms or paperwork required. Just keep your AADHAAR and PAN card handy.",
            image: "assets/images/complete_verification.png"
        },

        {
            number: 3,
            title: "Instant activation",
            description:
                "Get your interoperable UPI handle, RuPay card instantly. Topup cash and start transacting.",
            image: "assets/images/get_started.png"
        }
    ]
},


kioskSection: {
    label: "Learn more",

    title: "Become a Digi Kiosk, Open Digi Khata for your customers",

    buttonText: "Learn more",

    buttonLink: "/for-business/digi-kiosk",

    image: "assets/images/DigiKhataShopBoard.jpg",

    imageAlt: "Become a Digi Kiosk"
},


announcement: "Enabled for all types of transactions",



section11: {
    title: "One app for all your financial needs",

    description:
        "Download our mobile application now and discover the power of accessing all your payments needs in one place.",

    image: "assets/images/download_the_application.png",

    imageAlt: "Download the Digi Khata application",

    googlePlay: {
        link: "https://play.google.com/store/apps/details?id=com.paypointz.wallet&pcampaignid=web_share",
        image: "assets/images/google-play.png",
        alt: "Get it on Google Play"
    },

    appleStore: {
        link: "https://apps.apple.com/in/app/digi-khata/id1194920306",
        image: "assets/images/apple-store.png",
        alt: "Download on the App Store"
    }
},


faq: [

    {
        question: "What is Digi Khata, and how does it function?",

        answer:
            "Digi Khata is a revolutionary digital financial platform that simplifies your financial operations. It offers various financial services, such as easy fund transfers, bill payments, recharges, and many more, all under one roof. Digi Khata provides the convenience of managing your finances anytime, anywhere."
    },

    {
        question:
            "What is the process for setting up a Digi Khata pre-paid account?",

        answer:
            "Applying for a Digi Khata pre-paid account is straightforward. You can easily open a Digi Khata pre-paid account by downloading the mobile application or visiting the nearest Digi Khata kiosk branch. You will need to complete the KYC process to unlock the full potential of Digi Khata."
    },

    {
        question:
            "How do I sign up to create my new pre-paid Digi Khata account?",

        answerBefore:
            "To sign up and create your new pre-paid account with Digi Khata, download the Digi Khata app from",

        link: "https://digikhata.in/",
        linkText: "Digi Khata",

        answerAfter:
            ", install it on your device, follow the on-screen instructions, and complete the registration process."
    },

    {
        question: "What types of support do you provide?",

        answer:
            "We provide best-in-class support and training to help you manage and grow your business. Our regional team, with offices across India, is dedicated to assisting you with any questions or issues."
    }

],

//  social icons of home page ---------------------------------------

    socialLinks: [
        {
            name: "Facebook",
            url: "https://www.facebook.com/digikhataindia",
            icon: "fa-facebook",
            hover: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/digikhataindia/",
            icon: "fa-instagram",
            hover: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:border-pink-500"
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/channel/UCTexVAiymsW5z0uonAtBaVQ",
            icon: "fa-youtube-play",
            hover: "hover:bg-red-600 hover:text-white hover:border-red-600"
        },
        {
            name: "X",
            url: "https://x.com/digikhataindia",
            icon: "fa-twitter",
            hover: "hover:bg-black hover:text-white hover:border-black"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/digikhataindia",
            icon: "fa-linkedin",
            hover: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]"
        }
    ],

    accountSection: {
        title: "Get Your Pre-paid Digital Account",
        description: "Create your free pre-paid digital account and experience the ease and convenience of managing your finances."
    },

    downloadSlider: {
        text: "Download Our App",
        repeatCount: 8
    },







footer: {
    columns: [
        {
            title: "Solutions",
            links: [
                {
                    name: "Professionals",
                    url: "/for-business/professionals"
                },
                {
                    name: "Students",
                    url: "/for-business/students"
                },
                {
                    name: "Housemakers",
                    url: "/for-business/homemakers"
                },
                {
                    name: "Elders",
                    url: "/for-business/elders"
                }
            ]
        },

        {
            title: "Products",
            links: [
                {
                    name: "Mobile Application",
                    url: "/product/mobile-app"
                },
                {
                    name: "DigiKhata Card",
                    url: "/product/prepaid-card"
                }
            ]
        },

        {
            title: "Company",
            links: [    
                {
                    name: "About",
                    url: "/about"
                },
                {
                    name: "Features",
                    url: "/features"
                },
                {
                    name: "Contact",
                    url: "/contact"
                },
                {
                    name: "Lodge Complaint",
                    url: "/raiseRequest"
                },
                {
                    name: "Blogs",
                    url: "/blogs"
                },
                {
                    name: "FAQ",
                    url: "/faq"
                }
            ]
        },

        {
            title: "Additionals",
            links: [
                {
                    name: "Privacy Policy",
                    url: "/privacy-policy"
                },
                {
                    name: "Terms & Condition",
                    url: "/pdf/Terms & Conditions _ 2025.pdf"
                },
                {
                    name: "Customer Protection Policy",
                    url: "/pdf/Customer_Protection_Policy.pdf"
                },
                {
                    name: "Breakage Policy",
                    url: "/pdf/Card Expiry_Breakage_Income_Policy.pdf"
                },
                {
                    name: "Grievance Policy",
                    url: "/grievance-policy"
                },
                {
                    name: "Aadhaar Data Privacy Policy",
                    url: "/pdf/AadharDataPrivacyPolicy.pdf"
                },
                {
                    name: "Policy for PPI Business",
                    url: "/pdf/Policy_for_PPI_Business.pdf"
                }
            ]
        }
    ],

    copyright:
        "Copyright © 2026 Pay Point India Private Limited. All rights reserved."
},






// Navbar k under For Business menu k under Digi kiosk page k sections


  digiKioskHero: {
        label: "For Shop Owners",

        title: "Transform Your Store into a Digi Kiosk.",

        description:
            "Turn your outlet into a digital finance hub with Digi Khata’s kiosk solutions. Start today!",

        image: "assets/images/for-business.png",

        imageAlt: "Digi Kiosk",

        subTitle: "Digi Kiosk Self Service",

        subDescription:
            "Open Digi Khata accounts and provide pre-paid wallet/card fully interoperable through UPI/Rupay to your customers."
    },





 digiKioskBenefits: {

    heading: "Benefits",

    title: "Lowest charges, attractive commission at your landmark store in your neighborhood",

    items: [

        {
            image: "assets/images//Gramins1.png",
            imageAlt: "Digi Kiosk benefits",
            imageLeft: false,

            benefits: [
                {
                    title: "Instant PPI Wallet Offering",
                    description:
                        "Open Digi Khata PPI wallet for your customers and start offering interoperable UPI to your customers instantly."
                },

                {
                    title: "Easy KYC",
                    description:
                        "100% digital and effortless KYC with absolutely no paper-work. Open full KYC PPI wallet with only AADHAAR & PAN Card."
                },

                {
                    title: "Instant Interoperable UPI handle",
                    description:
                        "Customers can download the app as soon as the PPI wallet is opened and start sending and receiving money via their UPI and QR code."
                }
            ]
        },


        {
            image: "assets/images//Gramins2.png",
            imageAlt: "Rupay Pre-paid Card",
            imageLeft: true,

            benefits: [
                {
                    title: "Rupay Pre-paid Card",
                    description:
                        "PPI Wallets are opened with a free virtual card. Customers can also request a physical card to swipe/tap offline."
                }
            ]
        },


        {
            image: "assets/images//Gramins1.png",
            imageAlt: "Digi Kiosk services",
            imageLeft: false,

            benefits: [
                {
                    title: "100+ other services",
                    description:
                        "Offer 100s of other services like recharge, bill payments, travel bookings, insurance and many more from your Digi Kiosk."
                },

                {
                    title: "Attractive Commission / Lowest fee",
                    description:
                        "Digi Khata offers industry leading commission with the lowest possible margins to maximise your earning potential and ROI of your store."
                }
            ]
        }

    ]
},



digiKioskServices: {
    heading: "What you can do",

    title: "Become a hub for a suite of financial services",

    leftServices: [
        {
            image: "assets/images/free_account.png",
            imageAlt: "Financial services",
            description:
                "Sell a wide range of services to your customers like Instant PPI Wallet opening, interoperable UPI, Rupay card and much more…"
        },

        {
            image: "assets/images/free_account.png",
            imageAlt: "Pre-paid card services",
            description:
                "Provide customers ease of payment solution by providing pre-paid cards."
        }
    ],

    rightServices: [
        {
            image: "assets/images/free_account.png",
            imageAlt: "KYC verification",
            description:
                "Ensure smooth PPI Wallet offerings by verifying KYC."
        }
    ],

    bottomText:
        "... And let your customers enjoy the convenience of digital payments"
},




 digiKioskSecurity: {

    heading: "What you can do",

    title: "Keeping your money safe is our priority",

    items: [

        {
            image: "assets/images/secure.png",
            imageAlt: "RBI Compliant PPI Wallet",
            title: "RBI Compliant PPI Wallet",
            description: "Under PSSA Act, 2007"
        },

        {
            image: "assets/images/secure.png",
            imageAlt: "100% Bharatiya",
            title: "100% Bharatiya",
            description:
                "100% Swadeshi DNA. Founded, funded and run by Indians"
        },

        {
            image: "assets/images/secure.png",
            imageAlt: "Inclusive",
            title: "Inclusive",
            description:
                "For everyone from rural to urban India"
        }

    ]
},




digikioskCta: {
    title: "Open your Digi Kiosk NOW",

    description:
        "Offer innovative products, earn high commissions and become the proud owner of a Digi Kiosk in your neighbourhood now!",

    image: "assets/images/download_the_application.png",

    imageAlt: "Download the Digi Khata application",

    googlePlay: {
        link: "https://play.google.com/store/apps/details?id=com.paypointz.wallet&pcampaignid=web_share",
        image: "assets/images/google-play.png",
        alt: "Get it on Google Play"
    },

    appleStore: {
        link: "https://apps.apple.com/in/app/digi-khata/id1194920306",
        image: "assets/images/apple-store.png",
        alt: "Download on the App Store"
    }
},




// Navbar k Under For Business k under Digi Vyapaar ka hai ----------------------------------------------


  digiVyapaarHero: {
        label: "For Shop Owners",

        title: "Start accepting payment via UPI with Digi Vyapaar",

        description:
            "Upgrade to digital vyapar with Digi Vyapaar. Seamlessly accept payments through UPI.",

        image: "assets/images/for-business.png",

        imageAlt: "Digi Vyapaar",

        subTitle: "Accept payments via a UPI QR code provided by a 100% compliant Bharatiya company",

        subDescription:
                  "Bharat is adopting digital payments via UPI/QR giving competition to most developed nations globally. Businesses and transactions are getting more and more digital and instant. If you fear missing the growing demand and need for UPI enabled transactions Digikhata Vypaar is the perfect solution."
    },






digiVyapaarBenefits: {

    heading: "Benefits",

    title: "Get more from your store as it is",

    items: [

        {
            image: "assets/images//Gramins1.png",
            imageAlt: "Digi Vyapaar benefits",
            imageLeft: false,

            benefits: [
                {
                    title: "Accept UPI payments",
                    description:
                        "Accept payments from all UPI and bank apps, including Paytm, Google Pay, PhonePe, BHIM and more instantly"
                },

                {
                    title: "Easy settlements",
                    description:
                        "Receive instant, seamless and secure collection and settlements on our easy to use multilingual app."
                },

                {
                    title: "Get your QR",
                    description:
                        "Get your own QR instantly and receive error free payments. Easily stick and link our printed QR in your store."
                }
            ]
        },


        {
            image: "assets/images//Gramins2.png",
            imageAlt: "Rupay Pre-paid Card",
            imageLeft: true,

            benefits: [
                {
                    title: "Audio App notification",
                    description:
                        "The transaction notifications play automatically on the app in your preferred language. No additional box or system needs to be purchased to give real time information about transactions"
                },
                 {
                    title: "Dedicated Support",
                    description:
                        "Enjoy a seamless partnership experience with a dedicated distribution with 24/7 support tailored to your needs."
                },
                 {
                    title: "Comprehensive Training",
                    description:
                          "Receive the ultimate sales enablement kit,including extensive training to boost your sales."
                },

            ]
        },


    ]
},




digivyapaarCta: {
    title: "Open your Digi Vyapaar NOW",

    description:
        "Accept payments with via a UPI QR code provided by a 100% compliant Bharat company",

    image: "assets/images/download_the_application.png",

    imageAlt: "Download the Digi Khata application",

    googlePlay: {
        link: "https://play.google.com/store/apps/details?id=com.paypointz.wallet&pcampaignid=web_share",
        image: "assets/images/google-play.png",
        alt: "Get it on Google Play"
    },

    appleStore: {
        link: "https://apps.apple.com/in/app/digi-khata/id1194920306",
        image: "assets/images/apple-store.png",
        alt: "Download on the App Store"
    }
},






// Navbar k Under For Business k under DigiKhata UPI ka hai ----------------------------------------------



 digikhataUPIHero: {
        // label: "For Shop Owners",

        title: "Revolutionize Your Payment Collection with Digikhata Backed Online UPI",

        description:
            "Join thousands of merchants who trust DigiKhata for seamless, secure, and instant UPI payments with the highest success rates in the industry.",

        // image: "assets/images/for-business.png",

        // imageAlt: "Digikhata UPI",

        // subTitle: "Accept payments via a UPI QR code provided by a 100% compliant Bharatiya company",

        // subDescription:
        //           "Bharat is adopting digital payments via UPI/QR giving competition to most developed nations globally. Businesses and transactions are getting more and more digital and instant. If you fear missing the growing demand and need for UPI enabled transactions Digikhata Vypaar is the perfect solution."
    },






digiKhataUPITestimonials: {

    items: [

        {
            image: "assets/images//phone_mockup_1.png",
            imageAlt: "phone mockup 1 image",
            imageLeft: true,

            benefits: [
                {
                    title: "Faster Transactions",
                    description:
                        "Our UPI solution ensures lightning-fast payment processing with minimal latency."
                },
                 {
                    title: "Lowest Downtime",
                    description:
                        "Our robust infrastructure guarantees 99.99% uptime so you never miss a payment opportunity."
                },
                 {
                    title: "Dedicated Support",
                    description:
                        "Get personalized assistance from your dedicated account manager for all your payment needs."
                },

            ]
        },


    ]
},








digikhataUpiSolutions: {
    title: "Our UPI Solutions",

    solutions: [

        {
            title: "UPI Collect",

            image: "/assets/images/phone_mockup_2.png",

            imageAlt: "UPI Collect",

            imageFirst: false,

            features: [
                "Customer enters UPI ID during checkout",
                "Payment request sent to customer's UPI app",
                "Customer approves request and enters UPI PIN",
                "Instant payment confirmation",
                "Seamless redirection back to merchant"
            ]
        },


        {
            title: "Dynamic QR Code",

            image: "/assets/images/phone_mockup_2.png",

            imageAlt: "Dynamic QR Code",

            imageFirst: true,

            features: [
                "Generate unique QR codes for each transaction",
                "Customers scan with any UPI app",
                "No need to enter payment details manually",
                "Ideal for web checkout flows",
                "Supports variable amounts"
            ]
        },


        {
            title: "Pay via Any UPI App",

            image: "/assets/images/phone_mockup_2.png",

            imageAlt: "Pay via Any UPI App",

            imageFirst: false,

            features: [
                "Customer selects preferred UPI app",
                "App opens with pre-filled payment details",
                "Customer verifies and approves payment",
                "UPI PIN authentication for security",
                "Automatic return to merchant site"
            ]
        }

    ]
},






digiKhataUPIForm: {
        title: "Get Started with DigiKhata UPI",

        formSource: "upipg",

        submitText: "Submit Request",

        fields: {
            name: {
                label: "Full Name"
            },

            company: {
                label: "Business Name"
            },

            email: {
                label: "Email Address"
            },

            phone: {
                label: "Phone Number"
            },

            business: {
                label: "Business Type",

                placeholder: "Select your business type",

                options: [
                    {
                        value: "ecommerce",
                        label: "E-commerce"
                    },
                    {
                        value: "retail",
                        label: "Retail"
                    },
                    {
                        value: "services",
                        label: "Services"
                    },
                    {
                        value: "education",
                        label: "Education"
                    },
                    {
                        value: "other",
                        label: "Other"
                    }
                ]
            },

            message: {
                label: "Additional Requirements"
            }
        }
    },








// Navbar k Under For Business k under Network Collaborator ka hai ----------------------------------------------


 networkCollaboratorHero: {
        // label: "For Shop Owners",

        title: "Become a Network Collaborator",

        description1:
            "Partner with Digikhata to bring seamless UPI and digital payment services to your entire network. As a collaborator, you gain access to a powerful suite of solutions including PPI wallets, QR codes, soundboxes, enterprise tools, and a range of next‑generation payment services.",
        
        description2:
            "Partner with Digikhata to bring seamless UPI and digital payment services to your entire network. As a collaborator, you gain access to a powerful suite of solutions including PPI wallets, QR codes, soundboxes, enterprise tools, and a range of next‑generation payment services.",

        buttonText: "Get Started Now",

        // image: "assets/images/for-business.png",

        // imageAlt: "Digikhata UPI",

        // subTitle: "Accept payments via a UPI QR code provided by a 100% compliant Bharatiya company",

        // subDescription:
        //           "Bharat is adopting digital payments via UPI/QR giving competition to most developed nations globally. Businesses and transactions are getting more and more digital and instant. If you fear missing the growing demand and need for UPI enabled transactions Digikhata Vypaar is the perfect solution."
    },




};











    

