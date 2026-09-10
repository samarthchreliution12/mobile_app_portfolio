import { Product } from "./types";

export * from "./types";

export const products: Product[] = [
  {
    id: 1,
    slug: "p-partner",
    title: "P Partner",
    shortDescription: "Earn reward points on Redwop products, track your wallet, check eligible items, and redeem exciting gifts — all in one place with P Partner.",
    category: "Rewards",
    platform: ["Android", "iOS"],
    coverImage: "/products/app-01/cover_img.png",
    logo: "/products/app-01/logo.webp",
    links: {
    googlePlay: "https://play.google.com/store/apps/details?id=com.reliution.ppartner&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/redwop-p-partner/id6761183600"
  },
    description: "P Partner is a dedicated rewards app designed to recognize and reward Redwop partners and customers. Earn points on eligible product purchases, track your rewards, and redeem exciting gifts — all from one easy-to-use app.",
    howItWorks: [
      "Generate a unique code through the app",
      "Purchase eligible Redwop products",
      "Earn reward points instantly",
      "Redeem points for exciting gifts"
    ],
    features: [
      "Earn points on eligible product purchases",
      "Transparent and reliable reward system",
      "Track points and wallet transactions in real-time",
      "Browse eligible products and reward schemes",
      "Redeem points for exciting gifts anytime",
      "Instant point credit system for Redwop partners"
    ],
    featureGroups: [
      {
        title: "Earn Points Easily",
        items: [
          "Get points based on selected products",
          "Transparent and reliable reward system"
        ]
      },
      {
        title: "Track Your Rewards",
        items: [
          "View your points in the wallet section",
          "Monitor all transactions in real-time"
        ]
      },
      {
        title: "Check Eligible Products",
        items: [
          "Easily find which products offer rewards",
          "Stay updated with latest schemes"
        ]
      },
      {
        title: "Redeem Exciting Gifts",
        items: [
          "Use your points to claim rewards anytime",
          "Wide range of gift options available"
        ]
      }
    ],
    whyChoose: [
      "Simple and user-friendly interface",
      "Instant point credit system",
      "Complete transparency in rewards",
      "Designed for Redwop partners and customers",
      "More purchases = More rewards"
    ],
    promise: "P Partner is built to ensure that your efforts and loyalty are recognized and rewarded at every step.",
    targetUsers: "Redwop Partners & Customers",
    mainPurpose: "Product Rewards & Gift Redemption",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "AWS Cloud"],
    screenshots: [
      "/products/app-01/screenshot-01.webp",
      "/products/app-01/screenshot-02.webp",
      "/products/app-01/screenshot-03.webp",
      "/products/app-01/screenshot-04.webp",
      "/products/app-01/screenshot-05.webp",
      "/products/app-01/screenshot-06.webp"
    ],
    industry: "Rewards & Loyalty",
    applicationType: "Customer & Partner Rewards",
    developmentScope: "Mobile Application & Loyalty Management System"
  },
  {
    id: 2,
    slug: "r-one",
    title: "R One",
    shortDescription: "Take Control of Your Business. Anytime, Anywhere.",
    category: "Dealer Management",
    platform: ["Android", "iOS"],
    coverImage: "/products/app-02/cover_img.png",
    logo: "/products/app-02/logo.webp",
    links: {
    googlePlay: "https://play.google.com/store/apps/details?id=com.reliution.redwop_one&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/redwop-one/id6753169642"
  },
    description: "Tired of juggling multiple platforms and sources to manage your orders, stock, ledgers and more? Welcome to R One, the ultimate all-in-one mobile solution designed exclusively for dealers. Streamline your operations, maximize your profits, and stay connected with Redwop seamlessly.",
    whyChoose: [
      "We empower dealers like you with a powerful, intuitive dashboard that puts all critical business information right at your fingertips."
    ],
    features: [
      "Order Management Made Simple",
      "Live Dispatch & Tracking",
      "Smart Stock Management",
      "Exclusive Schemes & Offers",
      "Business Insights at a Glance"
    ],
    featureGroups: [
      {
        title: "Order Management Made Simple",
        items: [
          "Place new orders in just a few steps",
          "View your complete order history and track status in real-time",
          "Reorder favorite products quickly and easily"
        ]
      },
      {
        title: "Live Dispatch & Tracking",
        items: [
          "Get real-time updates on your dispatches",
          "Know exactly when your shipment left the warehouse with its details",
          "Reduce anxiety and plan your inventory better"
        ]
      },
      {
        title: "Smart Stock Management",
        items: [
          "Get a live view of your current stock levels",
          "Set low-stock alerts to never miss a sale due to out-of-stock situations",
          "Manage your inventory efficiently without manual counting"
        ]
      },
      {
        title: "Exclusive Schemes & Offers",
        items: [
          "Be the first to know about new schemes, special discounts, and promotional offers",
          "Access personalized deals directly from your suppliers",
          "Make informed purchasing decisions to boost your margins"
        ]
      },
      {
        title: "Business Insights at a Glance",
        items: [
          "View your ledger and account statements",
          "Track your payments and outstanding dues",
          "Analyze your business performance with easy-to-understand reports"
        ]
      }
    ],
    targetUsers: "Distributors, Wholesalers & Retailers",
    mainPurpose: "Dealer Business Management",
    technologies: ["Flutter", "Dart", "Node.js", "Express", "PostgreSQL", "AWS Cloud"],
    screenshots: [
      "/products/app-02/screenshot-01.webp",
      "/products/app-02/screenshot-02.webp",
      "/products/app-02/screenshot-03.webp",
      "/products/app-02/screenshot-04.webp",
      "/products/app-02/screenshot-05.webp",
      "/products/app-02/screenshot-06.webp",
      "/products/app-02/screenshot-07.webp"
    ],
    industry: "Business / Dealer Management",
    applicationType: "Dealer Business Management",
    developmentScope: "Mobile Application & Dealer Portal"
  },
  {
    id: 3,
    slug: "r-partner",
    title: "R Partner Scan App",
    shortDescription: "A smart QR code scanning and coupon validation app designed for Redwop Applicators, making it easy to validate redeemable coupons and receive their value directly into the user's wallet.",
    category: "Coupon Redemption",
    platform: ["Android", "iOS"],
    coverImage: "/products/app-03/logo.webp",
    logo: "/products/app-03/logo.webp",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.reliution.rpartner&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/redwop-partner/id6743917406"
    },
    description: "R Partner Scan App is a dedicated mobile application designed for Redwop Applicators who purchase and use Redwop products. The app provides a simple and efficient way to scan, validate, and redeem QR-based coupons available on selected Redwop product packs. With R Partner Scan App, applicators can quickly scan eligible QR codes and instantly validate their authenticity. Once successfully validated, the coupon value is credited directly to the Wallet account associated with the user's Redwop R Partner Application.",
    howItWorks: [
      "Purchase Eligible Redwop Products - Redwop Applicators purchase selected Redwop products that contain redeemable coupons.",
      "Open R Partner Scan App - Open the application and use the built-in QR scanner.",
      "Scan the QR Code - Scan the QR code available on the eligible product coupon.",
      "Validate the Coupon - The system verifies the QR code and checks whether the coupon is valid and eligible for redemption.",
      "Instant Wallet Credit - Once successfully validated, the coupon value is instantly credited to the Wallet account associated with the user's Redwop R Partner Application."
    ],
    features: [
      "Quickly scan QR codes from eligible Redwop product coupons",
      "Validate coupons instantly after scanning",
      "Instant reward credit to user's Wallet account",
      "Connects seamlessly with Redwop R Partner Application Wallet",
      "Clean and user-friendly experience designed for applicators"
    ],
    featureGroups: [
      {
        title: "QR Code Scanning",
        items: [
          "Quickly scan QR codes from eligible Redwop product coupons.",
          "Built-in scanning experience makes coupon redemption simple and convenient.",
          "Designed for fast scanning in day-to-day field usage."
        ]
      },
      {
        title: "Coupon Validation",
        items: [
          "Validate coupons instantly after scanning.",
          "Verify whether a coupon is genuine and eligible for redemption.",
          "Helps prevent invalid or duplicate coupon redemption."
        ]
      },
      {
        title: "Instant Reward Credit",
        items: [
          "Successfully validated coupons result in instant credit of the coupon value.",
          "Rewards are transferred directly to the user's Wallet account.",
          "Eliminates the need for manual reward claims."
        ]
      },
      {
        title: "Wallet Integration",
        items: [
          "Connects with the wallet account updated through the Redwop R Partner Application.",
          "Keeps coupon rewards connected to the user's existing reward ecosystem.",
          "Makes it easy for applicators to access their earned value."
        ]
      },
      {
        title: "Simple & User-Friendly Experience",
        items: [
          "Clean and straightforward scanning workflow.",
          "Minimal steps from scanning to validation.",
          "Designed specifically for Redwop Applicators."
        ]
      }
    ],
    whyChoose: [
      "Fast QR code scanning",
      "Instant coupon validation",
      "Direct wallet credit",
      "Simple and user-friendly experience",
      "Designed specifically for Redwop Applicators",
      "Seamless integration with the Redwop R Partner Application"
    ],
    promise: "R Partner Scan App is designed to make every eligible coupon easier to validate and redeem. By combining QR technology, automated validation, and wallet integration, the app provides Redwop Applicators with a fast and transparent way to receive the value associated with eligible product coupons.",
    targetUsers: "Redwop Applicators",
    mainPurpose: "QR Code Scanning, Coupon Validation & Instant Wallet Credit",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "QR Code Engine"],
    screenshots: [
      "/products/app-03/img-1.webp",
      "/products/app-03/img-2.webp",
      "/products/app-03/img-3.webp",
      "/products/app-03/img-4.webp",
      "/products/app-03/img-5.webp"
    ],
    industry: "Construction / Building Materials",
    applicationType: "QR Code Scanning & Coupon Redemption",
    developmentScope: "Mobile Application & Coupon Redemption Engine"
  },
  {
    id: 4,
    slug: "r-team",
    title: "R Team",
    shortDescription: "A complete mobile productivity platform for Redwop Chemicals' sales and marketing team, bringing attendance, sales operations, HR, reporting, customer management, and field productivity tools together in one place.",
    category: "Sales & Productivity",
    platform: ["Android", "iOS"],
    coverImage: "/products/app-04/logo.webp",
    logo: "/products/app-04/logo.webp",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.reliution.rteam&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/redwop-team/id6740811127"
    },
    description: "R Team is the official mobile application designed for the sales and marketing professionals of Redwop Chemicals. It brings essential day-to-day business operations into a single, easy-to-use platform, helping team members stay organized, productive, and connected while working in the field or from the office.\n\nFrom daily attendance and leave management to sales orders, quotations, reports, customer information, ledgers, and product resources, R Team provides a centralized workspace for managing everyday responsibilities efficiently.\n\nThe application is designed to reduce manual processes, improve visibility across daily activities, and give sales and marketing professionals quick access to the information they need while on the move.",
    howItWorks: [
      "Daily Attendance & In-Out - Team members can easily record their daily In-Out attendance directly through the mobile application, making attendance management simple and accessible.",
      "Manage Sales Activities - Sales professionals can manage sales-related activities from their mobile device, including creating and managing orders and staying updated with customer requirements.",
      "Stay Connected With Customers - Access important customer and business information while working in the field, helping sales professionals respond faster and manage client interactions more effectively.",
      "Submit Reports - Record and submit Daily Sales Reports (DSR) to maintain visibility into daily sales activities, achievements, and field performance.",
      "Manage HR Activities - Access leave-related functionality, company announcements, and employee performance information from one centralized application."
    ],
    features: [
      "Daily Attendance & In-Out recording directly from the app",
      "Sales Order & Quotation Creation & Management",
      "Leave Requests, Company Announcements & HR Management",
      "Ledger & Invoice Information tracking",
      "Daily Sales Report (DSR) recording & submission",
      "Complaints, Issue Reporting & Product Technical Literature Access"
    ],
    featureGroups: [
      {
        title: "Daily Attendance & In-Out",
        items: [
          "Record daily attendance directly from the mobile application.",
          "Simple In-Out workflow for everyday use.",
          "Helps maintain accurate attendance records.",
          "Designed for field and office-based team members."
        ]
      },
      {
        title: "Sales Order Management",
        items: [
          "Create and manage sales orders from the mobile application.",
          "Keep sales activities organized in one place.",
          "Access relevant order information while working with customers.",
          "Improve communication and follow-up during the sales process."
        ]
      },
      {
        title: "Quotation Management",
        items: [
          "Create professional quotations quickly.",
          "Share quotations with customers when required.",
          "Reduce the time needed to prepare and communicate pricing information.",
          "Help sales professionals respond to customer requirements faster."
        ]
      },
      {
        title: "Leave & HR Management",
        items: [
          "Manage leave requests through the application.",
          "Stay updated with company announcements.",
          "Access relevant employee information.",
          "Track performance and stay connected with internal HR activities."
        ]
      },
      {
        title: "Ledger & Invoice Information",
        items: [
          "Access detailed ledger information.",
          "View invoice lists and transaction details.",
          "Monitor outstanding payments and financial records.",
          "Improve visibility into customer-related financial information."
        ]
      },
      {
        title: "Daily Sales Report (DSR)",
        items: [
          "Record daily sales activities.",
          "Submit Daily Sales Reports directly from the application.",
          "Maintain a clear record of field achievements.",
          "Help management monitor sales activity and performance."
        ]
      },
      {
        title: "Customer & Business Management",
        items: [
          "Access important customer information while on the move.",
          "Keep relevant business information easily accessible.",
          "Support better customer communication and follow-up.",
          "Help sales teams stay informed during field visits."
        ]
      },
      {
        title: "Complaints & Issue Reporting",
        items: [
          "Raise complaints or report business-related issues directly through the app.",
          "Make it easier to communicate problems to the appropriate team.",
          "Support faster follow-up and resolution."
        ]
      },
      {
        title: "Product Literature & Technical Resources",
        items: [
          "Access product literature and brochures from the mobile application.",
          "Quickly find technical documents when meeting customers.",
          "Share relevant product information during sales discussions.",
          "Help sales professionals answer customer questions with accurate product information."
        ]
      }
    ],
    whyChoose: [
      "Stay productive while working in the field",
      "Reduce manual administrative work",
      "Access important information quickly",
      "Improve sales workflow efficiency",
      "Maintain better visibility into daily activities",
      "Stay connected with customers and internal teams",
      "Make informed decisions using accessible business information"
    ],
    promise: "R Team is built to keep Redwop's sales and marketing professionals connected, informed, and productive wherever their work takes them. From the first In-Out of the day to sales orders, customer meetings, daily reports, and business follow-ups, R Team provides the tools needed to manage everyday responsibilities from one convenient mobile platform.",
    targetUsers: "Redwop Sales & Marketing Team",
    mainPurpose: "Attendance, Sales Orders, Quotations, HR, DSR, Ledger, Invoices, Complaints & Product Resources",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS S3"],
    screenshots: [
      "/products/app-04/img-1.webp",
      "/products/app-04/img-2.webp",
      "/products/app-04/img-3.webp",
      "/products/app-04/img-4.webp",
      "/products/app-04/img-5.webp",
      "/products/app-04/img-6.webp"
    ],
    industry: "Chemical / Manufacturing",
    applicationType: "Sales & Business Productivity",
    developmentScope: "Mobile Application & Enterprise Productivity Platform"
  },
  {
    id: 5,
    slug: "site-management-app",
    title: "Site Management App",
    shortDescription: "Manage construction sites, projects, documents, photos, and essential resources from one powerful mobile application designed for professionals on the go.",
    category: "Construction & Real Estate",
    platform: ["Android", "iOS"],
    coverImage: "/products/app-05/logo.webp",
    logo: "/products/app-05/logo.webp",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.reliution.my_project&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/redwop-my-project/id6751258710"
    },
    description: "Our Site Management App is an all-in-one mobile solution designed to simplify the way professionals manage construction sites, projects, and field activities. The application provides a centralized platform where users can create and manage sites, store important project information, organize documents, and access essential resources whenever they need them.\n\nUsers can quickly create a new site by entering essential details such as site name, area, country, state, and city. Photos, documents, and project-related files can also be uploaded and securely stored, making important information easily accessible from a single location.\n\nThe application is built to support professionals who frequently work across multiple locations. Whether managing construction sites, coordinating projects, handling real estate activities, or working in the field, users can view and update site information whenever required.",
    howItWorks: [
      "Create & Manage Sites - Create new sites by adding site name, area, country, state, and city to keep all site information organized.",
      "Upload Project Files - Upload and securely store site photos, project documents, construction files, and important resources.",
      "View & Update Site Information - Access existing site details anytime and make updates whenever required to keep project information current.",
      "Discover Solutions - Explore the Discover Solutions section to access useful PDF resources, guides, manuals, and field work materials.",
      "Get Help & Share Feedback - Use the built-in Help Desk to get support whenever required and submit feedback to improve overall service."
    ],
    features: [
      "Create and manage multiple construction sites with detailed location info",
      "Upload and securely store project documents, construction files & site photos",
      "Centralized project information management accessible on the move",
      "Discover Solutions hub for downloading PDF guides & technical manuals",
      "Built-in Help Desk support and feedback submission",
      "Offline access and secure cloud storage for field work environments"
    ],
    featureGroups: [
      {
        title: "Site Management",
        items: [
          "Create and manage multiple sites.",
          "Add detailed site information including location and area.",
          "View existing site information whenever required.",
          "Edit site details to keep project information updated."
        ]
      },
      {
        title: "Document & File Management",
        items: [
          "Upload important project documents.",
          "Store site-related files in one place.",
          "Upload and manage project photos.",
          "Keep documents organized and easily accessible."
        ]
      },
      {
        title: "Project Information Management",
        items: [
          "Maintain important information for every site.",
          "Keep project files connected to the relevant location.",
          "Quickly access required information while working in the field.",
          "Reduce dependency on manual records."
        ]
      },
      {
        title: "Discover Solutions",
        items: [
          "Access construction-related resources.",
          "Download PDF guides and manuals.",
          "Explore useful resources for real estate and field work.",
          "Keep important reference materials available from the mobile application."
        ]
      },
      {
        title: "Help Desk",
        items: [
          "Get assistance directly through the application.",
          "Access support when facing issues.",
          "Share feedback and suggestions.",
          "Help improve the overall service experience."
        ]
      },
      {
        title: "Offline Access",
        items: [
          "Continue accessing important information when internet connectivity is limited.",
          "Designed to support professionals working in different field environments.",
          "Keep essential project information available when needed."
        ]
      },
      {
        title: "Secure Cloud Storage",
        items: [
          "Store project documents and files securely.",
          "Keep site information centralized.",
          "Access important resources from a single application.",
          "Reduce the risk of losing important project information."
        ]
      }
    ],
    whyChoose: [
      "Centralized site and project information",
      "Faster access to important documents and site photos",
      "Easier project file management with reduced manual paperwork",
      "Quick access to construction PDF guides and manuals",
      "Offline support for field environments",
      "Convenient support through built-in Help Desk"
    ],
    promise: "The Site Management App is designed to make site and project management simpler, faster, and more organized. By bringing site information, photos, documents, project files, useful resources, and support into one mobile platform, professionals can spend less time searching for information and more time focusing on their projects. Stay organized, save time, and keep your entire site and project information accessible whenever and wherever you need it.",
    targetUsers: "Construction Managers, Project Coordinators, Real Estate Professionals & Field Workers",
    mainPurpose: "Site Management, Document Management, Project Files, PDF Resources, Help Desk & Feedback",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "AWS S3"],
    screenshots: [
      "/products/app-05/img-1.webp",
      "/products/app-05/img-2.webp",
      "/products/app-05/img-3.webp",
      "/products/app-05/img-4.webp",
      "/products/app-05/img-5.webp",
      "/products/app-05/img-6.webp",
      "/products/app-05/img-7.webp",
      "/products/app-05/img-8.webp"
    ],
    industry: "Construction / Real Estate",
    applicationType: "Site & Project Management",
    developmentScope: "Mobile Application & Construction Site Management Platform"
  },
  {
    id: 6,
    slug: "tamteek",
    title: "TamTeek",
    shortDescription: "Explore industrial wood adhesive solutions from TamTeek, with product information and bonding solutions designed for furniture manufacturing, commercial production, and professional woodworking applications.",
    category: "Woodworking & Manufacturing",
    platform: ["Android", "iOS"],
    coverImage: "/products/app-06/logo.webp",
    logo: "/products/app-06/logo.webp",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.reliution.redwop_t_one&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/tamteek/id6797860431"
    },
    description: "TamTeek is a business-focused mobile application designed to provide convenient access to TamTeek's range of industrial wood adhesive products and bonding solutions.\n\nThe application helps customers, manufacturers, builders, and business users explore different wood adhesive products and understand how they can be used across furniture manufacturing, commercial production, and other woodworking applications.\n\nTamTeek offers industrial wood adhesives developed to deliver strong, durable, and reliable bonding performance while supporting the requirements of modern furniture and woodworking production.\n\nThe application provides a simple way to discover product information, understand different adhesive solutions, explore their applications, and connect with TamTeek for product-related questions and business enquiries.",
    howItWorks: [
      "Explore TamTeek - Discover the TamTeek product range and explore different industrial wood adhesive solutions from a single mobile application.",
      "Browse Products - Explore individual adhesive products and learn about their characteristics, applications, and intended production requirements.",
      "Find the Right Solution - Understand the differences between available adhesive solutions and identify products suitable for specific furniture and woodworking applications.",
      "Explore Applications - Learn how TamTeek products can support furniture manufacturing, commercial production, premium laminates, modular production, and other woodworking requirements.",
      "Contact TamTeek - Get in touch with the TamTeek team for product enquiries, business requirements, and customized wood-bonding solutions."
    ],
    features: [
      "MWP - Waterproof wood adhesive designed for durable commercial furniture manufacturing",
      "D3 - Wood adhesive developed for applications requiring high water resistance",
      "D4 Super Fast - Fast-curing wood adhesive designed for premium laminates & modular production",
      "All In One - Economical & versatile adhesive solution for large-scale furniture production",
      "Core - Reliable & economical wood adhesive for everyday woodworking requirements",
      "Direct B2B enquiry connection for customized wood-bonding solutions"
    ],
    featureGroups: [
      {
        title: "Product Information",
        items: [
          "Browse TamTeek's range of industrial wood adhesive products.",
          "Learn about individual product characteristics and applications.",
          "Access product information from one convenient platform.",
          "Understand which adhesive solutions are suitable for different woodworking requirements."
        ]
      },
      {
        title: "MWP",
        items: [
          "Waterproof wood adhesive designed for durable commercial furniture manufacturing.",
          "Designed for furniture manufacturing applications.",
          "Provides reliable bonding performance.",
          "Suitable for applications where water resistance is important.",
          "Built to support durable wooden products."
        ]
      },
      {
        title: "D3",
        items: [
          "Wood adhesive developed for applications requiring high water resistance.",
          "Designed for water-resistant wood bonding applications.",
          "Suitable for furniture and woodworking requirements.",
          "Provides dependable bonding performance.",
          "Helps support durable finished products."
        ]
      },
      {
        title: "D4 Super Fast",
        items: [
          "Fast-curing wood adhesive designed for applications where speed and productivity are important.",
          "Fast-curing adhesive solution.",
          "Suitable for premium laminate applications.",
          "Designed for modular production environments.",
          "Supports faster production workflows while maintaining reliable bonding."
        ]
      },
      {
        title: "All In One",
        items: [
          "Economical and versatile adhesive solution designed for furniture and large-scale production applications.",
          "Versatile bonding solution.",
          "Designed for commercial furniture production.",
          "Suitable for larger-scale manufacturing requirements.",
          "Provides an economical option for regular production needs."
        ]
      },
      {
        title: "Core",
        items: [
          "Reliable and economical wood adhesive designed for commercial furniture applications.",
          "Reliable bonding performance.",
          "Designed for commercial furniture production.",
          "Economical adhesive solution.",
          "Suitable for everyday woodworking and manufacturing requirements."
        ]
      },
      {
        title: "Contact & Enquiry",
        items: [
          "Connect with TamTeek for product-related questions.",
          "Submit business enquiries and product recommendations.",
          "Request customized wood-bonding requirements.",
          "Get additional information about adhesive solutions."
        ]
      }
    ],
    whyChoose: [
      "Practical wood adhesive solutions for professional & commercial applications",
      "Address diverse production needs from everyday furniture to high water resistance or fast curing",
      "Convenient digital experience to discover products & manufacturing workflows",
      "Direct channel for B2B procurement & technical product enquiries"
    ],
    promise: "TamTeek is focused on helping manufacturers and businesses find reliable adhesive solutions for their woodworking and furniture production requirements. Through its range of specialized products and business-focused solutions, TamTeek aims to support stronger bonding performance, efficient production, and durable finished products.",
    targetUsers: "Manufacturers, Builders, Furniture Producers & Woodworking Businesses",
    mainPurpose: "Explore Industrial Wood Adhesive Solutions (MWP, D3, D4 Super Fast, All In One & Core)",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB", "AWS S3"],
    screenshots: [
      "/products/app-06/img-1.webp",
      "/products/app-06/img-2.webp",
      "/products/app-06/img-3.webp",
      "/products/app-06/img-4.webp",
      "/products/app-06/img-5.webp",
      "/products/app-06/img-6.webp"
    ],
    industry: "Woodworking / Furniture Manufacturing",
    applicationType: "Industrial Product & Solution Discovery",
    developmentScope: "Mobile Application & Industrial Product Discovery Platform"
  },
  {
    id: 7,
    slug: "tesro",
    title: "Tesro",
    shortDescription: "A powerful customer self-service platform that gives businesses complete visibility into their orders, deliveries, invoices, account statements, and product availability — anytime, anywhere.",
    category: "Business / Distribution",
    platform: ["Android", "iOS"],
    coverImage: "/products/app-07/logo.webp",
    logo: "/products/app-07/logo.webp",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.reliution.tesro&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/tesro/id6785461303"
    },
    description: "Tesro is a powerful customer self-service platform designed to give customers complete visibility into their business transactions and relationship with Tesro.\n\nThe application provides a centralized mobile experience where customers can conveniently monitor their orders, track delivery progress, access invoices, review account statements, and check product availability from a single platform.\n\nWhether the user is a retailer, interior designer, contractor, or business customer, Tesro helps simplify everyday purchasing and account management by providing quick access to important business information.\n\nInstead of relying on frequent phone calls or email inquiries, customers can use Tesro to independently access their account information, stay informed about order fulfilment, and make faster purchasing decisions.",
    howItWorks: [
      "Access Your Account - Customers can securely access their Tesro account from their mobile device and view important business information in one centralized platform.",
      "Track Orders - Monitor orders from placement through fulfilment and delivery. View order details, quantities, expected delivery dates, and current order status.",
      "Monitor Deliveries - Stay informed about delivery progress and shipment movements. Check the current status of your order and expected delivery schedule.",
      "Manage Invoices - Access invoices from one convenient location. Search, review, and download invoice information whenever required.",
      "Check Account Statements - Review account statements, outstanding balances, payment history, and transaction records for complete account visibility.",
      "Check Product Availability - View current stock levels and product availability before making purchasing decisions to plan requirements efficiently."
    ],
    features: [
      "Real-time order tracking from placement to delivery",
      "Delivery status updates & shipment movement tracking",
      "Invoice management with instant search & PDF download",
      "Customer account statements, outstanding balances & payment history",
      "Live product stock availability & inventory planning",
      "Consolidated account overview for 24/7 self-service business management"
    ],
    featureGroups: [
      {
        title: "Order Tracking",
        items: [
          "Monitor orders in real time from placement to delivery.",
          "View complete order details.",
          "Check product quantities and order information.",
          "View expected delivery dates.",
          "Stay updated with current order status.",
          "Reduce the need for manual order follow-ups."
        ]
      },
      {
        title: "Delivery Status Updates",
        items: [
          "Track delivery progress.",
          "Stay informed about shipment movements.",
          "View order fulfilment status.",
          "Access delivery schedule information.",
          "Plan receiving and inventory activities more efficiently."
        ]
      },
      {
        title: "Invoice Management",
        items: [
          "Access all invoices in one place.",
          "Quickly search for required invoices.",
          "Review invoice details whenever needed.",
          "Download invoices for records and business reference.",
          "Keep financial documentation easily accessible."
        ]
      },
      {
        title: "Customer Statements",
        items: [
          "View complete account statements.",
          "Check outstanding balances.",
          "Review payment history.",
          "Access transaction records.",
          "Maintain better visibility into the customer account.",
          "Improve transparency between customers and Tesro."
        ]
      },
      {
        title: "Product Stock Availability",
        items: [
          "Check current stock levels.",
          "View product availability before placing orders.",
          "Make faster purchasing decisions.",
          "Improve inventory planning.",
          "Reduce delays caused by unavailable products."
        ]
      },
      {
        title: "Account Overview",
        items: [
          "Consolidated view of orders, invoices, statements, and delivery info.",
          "Access payment information and outstanding dues.",
          "Manage day-to-day business interactions from a single application.",
          "Easy access anytime from mobile devices on the go."
        ]
      }
    ],
    whyChoose: [
      "Real-time order visibility from placement to delivery",
      "Faster access to downloadable invoices and account statements",
      "Improved communication, transparency, and inventory planning",
      "Convenient access to account information reducing manual enquiries",
      "Secure and reliable access to business information anytime, anywhere"
    ],
    promise: "Tesro is designed to simplify customer interactions and provide instant access to important business information. Our goal is to help customers manage their accounts more efficiently while staying informed about every stage of their orders — from order placement and fulfilment to delivery, invoicing, and account management.",
    targetUsers: "Retailers, Interior Designers, Contractors & Business Customers",
    mainPurpose: "Order Tracking, Delivery Tracking, Invoice Management, Account Statements & Stock Availability",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS S3"],
    screenshots: [
      "/products/app-07/img-1.webp",
      "/products/app-07/img-2.webp",
      "/products/app-07/img-3.webp",
      "/products/app-07/img-4.webp",
      "/products/app-07/img-5.webp"
    ],
    industry: "Business / Distribution",
    applicationType: "Customer Self-Service Platform",
    developmentScope: "Mobile Application & Customer Self-Service Portal"
  },
  {
    id: 8,
    slug: "milano-fabrics-portal",
    title: "Milano Fabrics Portal",
    shortDescription: "A powerful customer self-service platform that provides complete visibility into orders, deliveries, invoices, account statements, and product availability for Milano Fabrics customers.",
    category: "Textiles & Fabrics",
    platform: ["Android", "iOS"],
    coverImage: "/products/app-08/logo.webp",
    logo: "/products/app-08/logo.webp",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.reliution.millano_fabrics&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/milano-fabrics/id6796206630"
    },
    description: "Milano Fabrics Portal is a powerful customer self-service mobile platform designed to give customers complete visibility into their business transactions and relationship with Milano Fabrics.\n\nThe application provides a centralized and convenient way for customers to monitor their orders, track delivery progress, access invoices, review account statements, and check product availability from anywhere.\n\nWhether managing a retail business, working as an interior designer, coordinating projects as a contractor, or handling commercial purchasing, Milano Fabrics Portal helps customers stay informed and manage their purchases efficiently.\n\nBy bringing essential business information into a single mobile platform, the application reduces dependency on phone calls and email enquiries and gives customers faster access to the information they need for their day-to-day operations.",
    howItWorks: [
      "Access Your Account - Customers can securely access their Milano Fabrics account through the mobile application and view important business information from one centralized platform.",
      "Track Orders - Monitor orders from placement through fulfilment and delivery. View order details, quantities, expected delivery dates, and current order status.",
      "Monitor Deliveries - Track delivery progress and stay informed about shipment movements and fulfilment schedules.",
      "Manage Invoices - Access invoices from a single location, search for specific documents, review invoice details, and download invoices whenever required.",
      "Review Account Statements - View account statements, outstanding balances, payment history, and transaction records to maintain complete financial visibility.",
      "Check Product Availability - Check current stock levels and product availability before placing an order, helping customers make faster and more informed purchasing decisions."
    ],
    features: [
      "Real-time order tracking from placement to delivery",
      "Delivery status updates & shipment movement tracking",
      "Invoice management with instant search & PDF download",
      "Customer account statements, outstanding balances & payment history",
      "Live fabric stock availability & inventory planning",
      "Consolidated account overview for 24/7 self-service business management"
    ],
    featureGroups: [
      {
        title: "Order Tracking",
        items: [
          "Monitor orders in real time from placement to delivery.",
          "View complete order details.",
          "Check product quantities.",
          "View expected delivery dates.",
          "Stay updated with current order status.",
          "Reduce the need for manual order follow-ups."
        ]
      },
      {
        title: "Delivery Status Updates",
        items: [
          "Track delivery progress.",
          "Stay informed about shipment movements.",
          "View order fulfilment information.",
          "Access delivery schedule updates.",
          "Plan inventory and receiving activities more efficiently."
        ]
      },
      {
        title: "Invoice Management",
        items: [
          "Access all invoices in one place.",
          "Quickly search for required invoices.",
          "Review invoice details whenever needed.",
          "Download invoices for business records.",
          "Keep important financial documents easily accessible."
        ]
      },
      {
        title: "Customer Statements",
        items: [
          "View complete account statements.",
          "Check outstanding balances.",
          "Review payment history.",
          "Access transaction records.",
          "Maintain transparency over the customer account.",
          "Keep track of financial activity with Milano Fabrics."
        ]
      },
      {
        title: "Product Stock Availability",
        items: [
          "Check current product stock levels.",
          "View product availability before placing orders.",
          "Make faster purchasing decisions.",
          "Improve inventory planning.",
          "Reduce delays caused by unavailable products."
        ]
      },
      {
        title: "Account Overview",
        items: [
          "Consolidated view of orders, invoices, statements, and delivery info.",
          "Access payment information and outstanding dues.",
          "Manage day-to-day business interactions from a single application.",
          "Easy access anytime from mobile devices on the go."
        ]
      }
    ],
    whyChoose: [
      "Save time with direct self-service access",
      "Track orders and deliveries more efficiently",
      "Access invoices and monitor account balances instantly",
      "Check fabric product availability to plan inventory requirements",
      "Manage business relationship with Milano Fabrics seamlessly"
    ],
    promise: "Milano Fabrics Portal is designed to simplify customer interactions and provide instant access to important business information. Our goal is to help customers manage their accounts more efficiently while staying informed about every stage of their orders — from order placement and fulfilment to delivery, invoicing, statements, and product availability.",
    targetUsers: "Retailers, Interior Designers, Contractors & Business Customers",
    mainPurpose: "Order Tracking, Delivery Tracking, Invoice Management, Account Statements & Stock Availability",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS S3"],
    screenshots: [
      "/products/app-08/img-1.webp",
      "/products/app-08/img-2.webp",
      "/products/app-08/img-3.webp",
      "/products/app-08/img-4.webp"
    ],
    industry: "Textiles / Fabrics",
    applicationType: "Customer Self-Service & Business Management",
    developmentScope: "Mobile Application & Customer Self-Service Portal"
  },
  {
    id: 9,
    slug: "dazzle-fabrics-portal",
    title: "Dazzle Fabrics Portal",
    shortDescription: "A powerful customer self-service platform that gives Dazzle Fabrics customers complete visibility into orders, deliveries, invoices, account statements, and product availability from anywhere.",
    category: "Textiles & Fabrics",
    platform: ["Android", "iOS"],
    coverImage: "/products/app-09/dazzle.png",
    logo: "/products/app-09/dazzle.png",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.reliution.dazzle&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/dazzle-connect/id6782863199"
    },
    description: "Dazzle Fabrics Portal is a powerful customer self-service application designed to provide complete visibility into business transactions with Dazzle Fabrics.\n\nThe application gives customers a centralized mobile platform to access important account information, monitor business activities, track orders and deliveries, review invoices and statements, and check product availability anytime and anywhere.\n\nWhether you are a retailer, wholesaler, interior designer, contractor, distributor, or business customer, Dazzle Fabrics Portal helps simplify everyday business interactions and provides instant access to the information required to manage purchases efficiently.\n\nBy bringing essential business information together in one platform, the application reduces dependency on phone calls, emails, and manual follow-ups while helping customers make faster and more informed purchasing decisions.",
    howItWorks: [
      "Access Your Account - Customers can securely access their Dazzle Fabrics account through the mobile application and view their business information from a centralized dashboard.",
      "Track Orders - Monitor business orders from placement through fulfilment and delivery. View order details, quantities, current status, and expected delivery timelines.",
      "Monitor Deliveries - Stay updated with shipment progress and delivery schedules. Check delivery status and gain better visibility into the fulfilment process.",
      "Manage Invoices - Access invoices from one convenient location. Search, review, and download invoices whenever required for business records and accounting purposes.",
      "Review Account Statements - View account statements, outstanding balances, payment history, and transaction records to maintain complete visibility over account activity.",
      "Check Product Availability - Check current stock levels and product availability before placing orders to plan purchases and manage inventory requirements efficiently."
    ],
    features: [
      "Real-time order tracking from placement to delivery",
      "Delivery tracking & shipment status updates",
      "Invoice management with search, review & instant PDF download",
      "Customer account statements, outstanding balances & transaction records",
      "Live fabric stock availability & inventory planning",
      "Centralized mobile dashboard for 24/7 self-service business management"
    ],
    featureGroups: [
      {
        title: "Order Tracking",
        items: [
          "Track business orders from placement to delivery.",
          "View complete order details.",
          "Check product quantities.",
          "Monitor current order status.",
          "View expected delivery timelines.",
          "Reduce the need for manual order follow-ups."
        ]
      },
      {
        title: "Delivery Tracking",
        items: [
          "Monitor shipment progress.",
          "Stay informed about delivery schedules.",
          "View fulfilment status.",
          "Gain better visibility into order movement.",
          "Plan receiving and inventory activities more effectively."
        ]
      },
      {
        title: "Invoice Management",
        items: [
          "Access all invoices in one place.",
          "Search for specific invoices quickly.",
          "Review invoice details.",
          "Download invoices whenever required.",
          "Maintain organized business and accounting records."
        ]
      },
      {
        title: "Customer Account Statements",
        items: [
          "View complete account statements.",
          "Check outstanding balances.",
          "Review payment history.",
          "Access transaction records.",
          "Maintain transparency over account activity.",
          "Keep track of financial information in one place."
        ]
      },
      {
        title: "Product Stock Availability",
        items: [
          "Check current stock levels.",
          "View product availability before placing orders.",
          "Stay informed about inventory status.",
          "Make faster purchasing decisions.",
          "Improve inventory and stock planning."
        ]
      },
      {
        title: "Account Overview",
        items: [
          "Consolidated view of order history, current orders, and delivery info.",
          "Access invoices, account statements, and payment information.",
          "Monitor product availability and inventory status on the move.",
          "Manage business relationship with Dazzle Fabrics faster and easier."
        ]
      }
    ],
    whyChoose: [
      "Real-time order tracking and visibility",
      "Convenient access to invoices and account statements",
      "Improved communication, transparency, and stock planning",
      "Faster mobile access to business information anytime, anywhere",
      "Reduced dependency on manual phone/email enquiries"
    ],
    promise: "Dazzle Fabrics Portal is designed to simplify customer interactions and provide instant access to important business information. Our goal is to help customers manage their accounts more efficiently while staying informed about every stage of their orders — from order placement and fulfilment to delivery, invoicing, account statements, and product availability.",
    targetUsers: "Retailers, Wholesale Fabric Buyers, Interior Designers, Contractors, Dealers, Distributors & Business Customers",
    mainPurpose: "Order Tracking, Delivery Tracking, Invoice Management, Account Statements, Stock Availability & Account Management",
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS S3"],
    screenshots: [
      "/products/app-09/img-1.webp",
      "/products/app-09/img-2.webp",
      "/products/app-09/img-3.webp",
      "/products/app-09/img-4.webp",
      "/products/app-09/img-5.webp",
      "/products/app-09/img-6.webp",
      "/products/app-09/img-7.webp"
    ],
    industry: "Textiles / Fabrics",
    applicationType: "Customer Self-Service & Business Management",
    developmentScope: "Mobile Application & Customer Self-Service Portal"
  }
];
