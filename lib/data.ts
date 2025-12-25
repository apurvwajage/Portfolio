// This file mocks your personal information and project data.
// In a real application, this data would typically come from a database, CMS, or API.
import nextConfig from "@/next.config.mjs"
export const personalInfo = {
  name: "Apurva Wajage", // Replace with your actual name
  title: "Software Engineer", // Replace with your title
  bio: "I am a passionate software engineer with a focus on building scalable and user-friendly applications. I love working with modern web technologies and solving complex problems. My expertise includes full-stack development, cloud services, and creating robust APIs.", // Replace with your bio
  githubUrl: "https://github.com/apurvwajage", // Replace with your GitHub URL
  linkedinUrl: "https://linkedin.com/in/apurvwajage", // Replace with your LinkedIn URL
  email: "apurvawajage@gmail.com", // Replace with your email
  resumeUrl: "https://drive.google.com/file/d/1imOcED0qlPuM11QiVPMUKQhWwMzviHsE/view?usp=sharing", // Replace with your actual GitHub raw file URL
}

export const projects = [
  {
    id: "1",
    title: "Expense Tracker App",
    slug: "expense-tracker-app",
    shortDescription:
      "A full-stack expense tracker with user authentication, transaction logging, and PDF upload for automated analysis.",
    longDescription:
      "Built a feature-rich expense tracking platform that allows users to securely log in, record income and expenses, and upload transaction PDFs for automatic data extraction and analysis. Integrated a PostgreSQL database for persistent storage and used Django for backend APIs. The frontend, developed in React, offers a clean and responsive user interface for efficient financial management.",
    imageUrl: "/ExpenseTrackerMain.png?height=400&width=600", // Replace with an actual image URL
    technologies: ["Python", "Django", "Supabase", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://expensetracker-1ivl.onrender.com", // Replace with live demo URL if available
    githubUrl: "https://github.com/apurvwajage/ExpenseTracker", // Replace with project GitHub URL
    media: [
      {
        type: "image",
        url: "/ExpenseTrackerMain.png?height=400&width=600&text=E-commerce+Homepage",
        alt: "E-commerce Homepage",
      },
      { type: "image", url: "/ExpenseTrackerDashboardDark.png?height=400&width=600&text=Product+Catalog", alt: "Product Catalog" },
      { type: "image", url: "/ExpenseTrackerDashboardLight.png?height=400&width=600&text=Shopping+Cart", alt: "Shopping Cart" },
      { type: "image", url: "/ExpenseTrackerTransactions.png?height=400&width=600&text=Checkout+Process", alt: "Checkout Process" },
      // {
      //   type: "video",
      //   url: "/placeholder-video.mp4",
      //   thumbnail: "/placeholder.svg?height=400&width=600&text=E-commerce+Demo",
      //   alt: "E-commerce Platform Demo",
      // },
    ],
    keyFeatures: [
      "User authentication with session management and password encryption",
      "Upload and parse transaction PDFs (e.g., PhonePe statements) for automated expense extraction",
      "Manual expense entry with category tagging and notes",
      "Search and filter transactions by date, category, or amount",
      "Responsive design for both desktop and mobile devices"
    ],
    developmentProcess: [
      {
        phase: "Planning & Requirements Gathering",
        description:
          "Identified common user pain points in managing expenses. Outlined key features like auto-parsing statements, charts, and categorization. Sketched wireframes and designed database schema."
      },
      {
        phase: "Backend Development",
        description:
          "Built the backend using Django. Integrated PDF parsing using Python libraries, and stored transactions in a PostgreSQL database hosted on Supabase. Implemented authentication and authorization."
      },
      {
        phase: "Frontend Development",
        description:
          "Created a clean and responsive UI using HTML, CSS, and JavaScript. Integrated Django templates with dynamic views for displaying data and interacting with the backend."
      },
      {
        phase: "Testing & Deployment",
        description:
          "Tested PDF uploads, form validations, and data integrity. Deployed the project on Render and connected it to Supabase for persistent storage."
      }
    ],
  },
  {
    id: "2",
    title: "RFID Based Museum Security System",
    slug: "rfid-museum-security-system",
    shortDescription: "An RFID-based smart museum security system with real-time monitoring and intrusion detection.",
    longDescription:
      "Engineered a robust museum security solution integrating RFID-based entry validation, artifact protection using IR sensors, and visitor proximity detection via ultrasonic sensors. Real-time monitoring and logging were implemented using Python scripts and Google Sheets. The system controls access with servos and displays status messages on an LCD. Alerts are triggered through a buzzer for any suspicious activity, ensuring enhanced artifact safety.",
    imageUrl: "/MuseumSecuritySystemStructure.png?height=400&width=600", // Replace with an actual image URL
    technologies: ["Arduino", "Python", "RFID", "IR Sensor", "Ultrasonic Sensor", "Google Sheets", "LCD Display", "Servo Motor", "Buzzer"],
    liveUrl: "#", // Replace with live demo URL if available
    githubUrl: "#", // Replace with project GitHub URL
    media: [
      {
        type: "image",
        url: "/placeholder.svg?height=400&width=600&text=E-commerce+Homepage",
        alt: "E-commerce Homepage",
      },
      { type: "image", url: "/MuseumSecuritySystemStructure.png?height=400&width=600&text=Product+Catalog", alt: "Product Catalog" },
      { type: "image", url: "/placeholder.svg?height=400&width=600&text=Shopping+Cart", alt: "Shopping Cart" },
      { type: "image", url: "/placeholder.svg?height=400&width=600&text=Checkout+Process", alt: "Checkout Process" },
      {
        type: "video",
        url: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=400&width=600&text=E-commerce+Demo",
        alt: "E-commerce Platform Demo",
      },
    ],
    keyFeatures: [
      "RFID-based entry system for visitor verification",
      "Real-time validation using Google Sheets and Python integration",
      "IR sensors placed under artifacts to detect unauthorized removal",
      "Ultrasonic sensors for proximity detection and alerting",
      "16x2 LCD display showing messages only upon card validation",
      "Buzzer alerts for suspicious activity or security breaches",
      "Visitor entry and exit time tracking with Google Sheets logging"
    ],
    developmentProcess: [
      {
        phase: "Requirement Analysis & Planning",
        description:
          "Planned a secure visitor tracking system for museums. Designed the flow to verify visitor credentials and log entry/exit with minimal human involvement."
      },
      {
        phase: "Hardware Integration",
        description:
          "Used Arduino Uno to interface with RFID readers, IR sensors, ultrasonic sensors, buzzer, servo motor (gate), and LCD display. Ensured stable hardware communication."
      },
      {
        phase: "Software & Cloud Logic",
        description:
          "Developed Python scripts to handle RFID data, validate it against Google Sheets, and decide entry permissions. Real-time logging of UID, timestamps, and visitor details to the cloud."
      },
      {
        phase: "Testing & Validation",
        description:
          "Simulated multiple use-cases including valid entry, fake cards, unauthorized proximity, and artifact tampering. System reliably detected and responded to suspicious activity with alerts and logging."
      }
    ],
  },
  {
    id: "3",
    title: "Store Management System",
    slug: "store-management-system",
    shortDescription: "A complete store management application with inventory, billing, and sales tracking features.(The project is not live)",
    longDescription:
      "Developed a robust system for managing store operations, including product inventory, sales, billing, and stock tracking. Enabled secure user authentication and role-based access for managers and employees. Integrated dynamic product listing, transaction records, and sales analytics. The application improves day-to-day store operations and inventory accuracy.",
    imageUrl: "/StoreManagementMain.png?height=400&width=600", // Replace with an actual image URL
    technologies: ["JSP", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "#", // Replace with live demo URL if available
    githubUrl: "https://github.com/janedoe/personal-blog", // Replace with project GitHub URL
    media: [
      {
        type: "image",
        url: "/StoreManagementMain.png?height=400&width=600&text=E-commerce+Homepage",
        alt: "E-commerce Homepage",
      },
      { type: "image", url: "/StoreManagementDashboard.png?height=400&width=600&text=Product+Catalog", alt: "Dashboard" },
      { type: "image", url: "/StoreManagementInventory.png?height=400&width=600&text=Shopping+Cart", alt: "Inventory" },
      { type: "image", url: "/StoreManagementReports.png?height=400&width=600&text=Checkout+Process", alt: "Reports" },
      { type: "image", url: "/StoreManagementAnalytics.png?height=400&width=600&text=Checkout+Process", alt: "Analytics" },
      // {
      //   type: "video",
      //   url: "/placeholder-video.mp4",
      //   thumbnail: "/placeholder.svg?height=400&width=600&text=E-commerce+Demo",
      //   alt: "E-commerce Platform Demo",
      // },
    ],
    keyFeatures: [
      "User-friendly interface for managing products, customers, and sales",
      "Add, update, delete, and search products in real-time",
      "Customer record management with purchase history tracking",
      "Order placement and billing system with invoice generation",
      "Inventory monitoring with stock-level alerts",
      "Role-based access for admin and staff users"
    ],
    developmentProcess: [
      {
        phase: "Planning & System Design",
        description:
          "Defined key modules including inventory, customer, billing, and user roles. Designed ER diagrams and database schema using MySQL."
      },
      {
        phase: "Backend Development",
        description:
          "Developed server-side logic using JSP and Servlets. Handled form submissions, CRUD operations, and user authentication securely."
      },
      {
        phase: "Frontend Development",
        description:
          "Built responsive UI using HTML, CSS, and JavaScript for smooth navigation and user interaction. Ensured input validation and user feedback."
      },
      {
        phase: "Testing & Deployment",
        description:
          "Tested the application for data consistency and edge cases. Deployed the application on a local server and demonstrated full functionality for store operations."
      }
    ],
  },
]
