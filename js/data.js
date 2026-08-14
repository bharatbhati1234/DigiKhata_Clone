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
                    link: "/for-business/digi-kiosk"
                },
                {
                    name: "Digi Vyapaar",
                    link: "/for-business/digi-vypaar"
                },
                {
                    name: "Digikhata UPI",
                    link: "/for-business/upiapi"
                },
                {
                    name: "Network Collaborator",
                    link: "/for-business/networkcollaborator"
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




    services: [

        {
            title: "Financial",
            image: "assets/images/financial.png"
        },

        {
            title: "Booking",
            image: "assets/images/booking.png"
        },

        {
            title: "Recharges",
            image: "assets/images/recharges.png"
        },

        {
            title: "Payments",
            image: "assets/images/bill.png"
        },

        {
            title: "Insurance",
            image: "assets/images/insuarance.png"
        },

        {
            title: "Loans",
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

appStore: {
    link: "https://apps.apple.com/in/app/digi-khata/id1194920306",
    image: "assets/images/apple-store.png",
    alt: "Download on the App Store"
},

downloadapp:{
    link: "https://apps.apple.com/in/app/digi-khata/id1194920306",
    image: "assets/images/apple-store.png",
    alt: "Download on the App Store",
    heading:"One app for all your financial needs",
    paragraph:"Download our mobile application now and discover the power of accessing all your payments needs in one place.",
    button:{
         buttonText: "Learn more",

         buttonLink: "/for-business/digi-kiosk",

         image: "assets/images/DigiKhataShopBoard.jpg",

         imageAlt: "Become a Digi Kiosk"

    }

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
}

};



    

