// src/data/projects.js

// {
//     id: ,
//     title: "T",
//     description: "",
//     image: ``,
//     category: "",
//     gallery: [
//         `${process.env.PUBLIC_URL}`,
//     ],
//     sections: [
//       {
//         title: "",
//         content: ""
//       },
//     ]
//   },

export const projects = [
    {
    id: 9,
    title: "Gamelan Naga Kencana Introduction Video",
    description: "A ",
    image: ``,
    category: "Multimedia",
    gallery: [
        `${process.env.PUBLIC_URL}`,
    ],
    sections: [
      {
        title: "",
        content: ""
      },
    ]
  },
    {
    id: 8,
    title: "Study Buddy Assignment Tracker",
    description: "A collaborative web application designed to help students organize their academic life. It features a dashboard for tracking assignments and a dedicated module for managing school subjects.",
    image: `${process.env.PUBLIC_URL}/images/SDBD/1.png`, // Don't forget to add your image path later!
    category: "Web Development",
    gallery: [
      `${process.env.PUBLIC_URL}/images/SDBD/2.png`,
      `${process.env.PUBLIC_URL}/images/SDBD/3.png`,
      `${process.env.PUBLIC_URL}/images/SDBD/4.png`,
      `${process.env.PUBLIC_URL}/images/SDBD/5.png`,
      `${process.env.PUBLIC_URL}/images/SDBD/6.png`,
      `${process.env.PUBLIC_URL}/images/SDBD/7.png`,
      `${process.env.PUBLIC_URL}/images/SDBD/8.png`,
      `${process.env.PUBLIC_URL}/images/SDBD/9.png`,
    ],
    sections: [
      {
        title: "Technologies Used",
        content: "HTML, CSS, Node.js, MySQL (via MySQLWorkbench), filess.io (Database Hosting), VS Code"
      },
      {
        title: "Features",
        content: [
          "Subject Management System: A CRUD-based feature allowing students to add, edit, and delete the subjects they are currently taking.",
          "Dynamic Forms: Custom-built forms that interface directly with the MySQL database to update user records in real-time.",
          "Centralized Dashboard: A visually unified main hub (designed by me) that provides users with an immediate overview of their academic status.",
          "Secure Login Interface: A clean, user-friendly entry point for the application."
        ]
      },
      {
        title: "Role in the Project",
        content: "I worked in a team of 5 (with Shem, Justin, Chih Hsuan, and Dini). My primary responsibility was the full-stack development of the 'Subjects' page, ensuring users could manage their subject lists. Additionally, I took the lead on designing the UI for the common areas, including the Main Dashboard and Login Page, to ensure a consistent look and feel across the app."
      },
      {
        title: "Challenges Faced",
        content: "The biggest challenge was integration. Since each team member developed their own feature (Subjects, Assignments, etc.) separately, combining them into one cohesive Node.js project required careful coordination. We had to ensure our database schemas on filess.io matched perfectly and that our CSS styles didn't conflict when merged."
      },
      {
        title: "Learning Outcomes",
        content: [
          "Mastered the implementation of CRUD operations (Create, Read, Update, Delete) using Node.js and MySQL.",
          "Learned how to connect a local application to a remote cloud database (filess.io).",
          "Gained experience in 'Modular Development'—building a small part of a larger system and integrating it with others."
        ]
      },
      {
        title: "Future Improvements",
        content: "If we had more time, I would implement a 'Due Date Reminder' system that automatically emails students when an assignment for a specific subject is approaching."
      }
    ]
  },
  {
    id: 6,
    title: "Task List Manager App",
    description: "A functional mobile app prototype built with React Native. Created for a simulated internship assessment, it demonstrates core mobile development concepts including list rendering, stack navigation, and data manipulation.",
    image: `${process.env.PUBLIC_URL}/images/mobile-thumb.jpg`, // Update this path!
    category: "Mobile Development",
    gallery: [], // Add your emulator screenshots here
    sections: [
      {
        title: "Technologies Used",
        content: "React Native, Expo, React Navigation (Native Stack), JavaScript (ES6)"
      },
      {
        title: "Key Features",
        content: [
          "Categorized Data View: Utilized `SectionList` to distinctively group tasks into 'Pending' and 'Completed' categories with color-coded headers.",
          "CRUD Functionality: Complete implementation of Create, Read, Update, and Delete operations. Users can add new tasks, edit descriptions, change status, or remove items entirely.",
          "Summary Analytics: Met the assignment requirement for a 'Calculation' feature by implementing a status algorithm that computes the completion percentage and displays it via a native Alert.",
          "Persistent Navigation: Built a seamless user flow using `NativeStackNavigator`, allowing data parameters to be passed between the Home, Add, and Edit screens."
        ]
      },
      {
        title: "Project Context",
        content: "This project was the CA1 submission for the 'Mobile App Development' module. The brief simulated an internship scenario where 'management' required a proof-of-concept app to demonstrate proficiency in React Native's ListView and navigation systems."
      },
      {
        title: "Challenges Faced",
        content: "The main logic challenge was handling state changes across different screens without a backend. Specifically, when a user changes a task from 'Pending' to 'Completed' in the Edit screen, I had to write logic to identify the item's index, remove it from the source array, and push it to the target array, ensuring the SectionList updated correctly upon returning to the Home screen."
      },
      {
        title: "Learning Outcomes",
        content: [
          "Mastered the differences between `FlatList` and `SectionList` for rendering mobile data.",
          "Learned how to structure a React Native codebase with separate component files for cleaner architecture.",
          "Gained experience testing and debugging UI responsiveness using the Android Studio Emulator."
        ]
      }
    ]
  },
  {
    id: 1,
    title: "AR Business Card (Lumon Industries)",
    description: "An interactive Augmented Reality business card inspired by the TV show 'Severance'. It utilizes image tracking technology to project a custom-modeled 3D company logo when viewed through a mobile device.",
    image: `${process.env.PUBLIC_URL}/images/VR Card/Screenshot 2025-12-12 111158.png`, // Update with your actual image path
    category: "Immersive Technologies",
    gallery: [
      `${process.env.PUBLIC_URL}/images/VR Card/IMG_1568.png`,
      `${process.env.PUBLIC_URL}/images/VR Card/FULL JPG.jpeg`,
      `${process.env.PUBLIC_URL}/images/VR Card/1.png`,
      `${process.env.PUBLIC_URL}/images/VR Card/2.png`,
      `${process.env.PUBLIC_URL}/images/VR Card/3.png`,
      `${process.env.PUBLIC_URL}/images/VR Card/Muhammad Hariz Video Submission.mp4`,
    ],
    sections: [
      {
        title: "Technologies Used",
        content: "Unity, Vuforia Engine, Shapr3D (iPad Modeling), Canva (2D Design)"
      },
      {
        title: "Features",
        content: [
          "Custom 3D Modeling: I personally modeled the 3D 'Lumon' water drop logo using Shapr3D on an iPad with an Apple Pencil.",
          "High-Fidelity Image Tracking: Achieved a 4-star Vuforia rating for the target image, ensuring the 3D model appears instantly and stays locked to the card.",
          "Thematic Design: A 'Macrodata Refinement' aesthetic inspired by the show Severance, featuring the 'Junior Refiner' title and official branding."
        ]
      },
      {
        title: "Role in the Project",
        content: "I was the sole developer for this assignment. My role involved the full creative pipeline: designing the physical card in Canva to optimize for tracking points, modeling the 3D assets from scratch in Shapr3D, and assembling the final AR experience in Unity."
      },
      {
        title: "Challenges Faced",
        content: "The main challenge was designing a business card that was aesthetically pleasing while still being 'readable' by the AR camera. Vuforia requires high-contrast 'feature points' to track an image. My initial designs were too minimalist, resulting in poor tracking. I overcame this by adding a textured background (the 'blue noise' effect) which boosted the tracking rating to 4 stars without ruining the visual design."
      },
      {
        title: "Learning Outcomes",
        content: [
          "Mastered the workflow of exporting 3D models from iPad (Shapr3D) into a Unity environment.",
          "Understood the fundamentals of AR Image Targets and feature point detection.",
          "Gained experience in optimizing 3D assets for mobile AR performance."
        ]
      },
      {
        title: "Future Improvements",
        content: "While the current version is purely visual, I would like to add interactivity in the future. Implementing 'Virtual Buttons' would allow users to tap the holographic email or LinkedIn icon to automatically open those links on their phone."
      }
    ]
  },
  {
    id: 2,
    title: "Cypher's Chamber (VR Escape Room)",
    description: "A narrative-driven Virtual Reality escape room thriller built in Unity. Players are trapped in a surveillance hub and must solve a sequence of logic puzzles—interspersed with riddles—to override a rogue AI's lockdown.",
    image: `${process.env.PUBLIC_URL}/images/VR Escape Room/Screenshot 2025-12-12 102904.png`,
    category: "Immersive Technologies",
    gallery: [
      `${process.env.PUBLIC_URL}/images/VR Escape Room/Screenshot 2025-12-12 102904.png`,
    ],
    sections: [
      {
        title: "Technologies Used",
        content: "Unity 3D, C#, XR Interaction Toolkit, ProBuilder, HTC VIVE"
      },
      {
        title: "Gameplay Loop",
        content: [
          "Memory & Logic: Programmed a working 'Simon Says' color-sequence game and a 'Lights Out' toggle puzzle using C# scripts.",
          "Physical Interaction: Created a 'Power Grid' fetch quest where players must physically locate and slot battery items into a receiver.",
          "The Riddle Chain: Solving each mechanical puzzle unlocks a cryptic riddle. Players must solve all 4 riddles to deduce the final keypad code."
        ]
      },
      {
        title: "Role in the Project",
        content: "I acted as both Solo Developer and Level Designer. My primary focus was scripting the interaction logic for the electronic puzzles. For the environment, I modeled the structural elements (walls, custom buttons) using ProBuilder and populated the room using curated assets from the Unity Store."
      },
      {
        title: "Challenges Faced",
        content: "The biggest challenge was scope management. Balancing the complex coding required for the 'Simon Says' and 'Lights Out' algorithms left less time for environmental polish. I learned that making a room feel 'lived-in' and fully furnished requires significantly more time than expected, leading me to prioritize functionality over decoration for this submission."
      },
      {
        title: "Learning Outcomes",
        content: [
          "Learned to use ProBuilder to greybox and construct custom level geometry within Unity.",
          "Mastered the logic arrays required to program state-based puzzles (like checking if all lights are off).",
          "Gained experience in 'Feature Cutting'—adapting the original Game Design Document to meet the deadline."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Swiss Show Choir EXCO Windbreaker Design",
    description: "Apparel design fully led by me to create a windbreaker for the Swiss Show Choir Executive Committee.",
    image: `${process.env.PUBLIC_URL}/images/CCA Windbreaker/Jacket_Black.JPEG`,
    category: "Design",
    gallery: [
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/1.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/2.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/3.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/4.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/5.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/6.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/7.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/8.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/9.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/10.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/11.jpg`,
      `${process.env.PUBLIC_URL}/images/CCA Windbreaker/Jacket_White.JPEG`, 
    ]
  },
  {
    id: 4,
    title: "Swiss Blue Whales House Banner",
    description: "A large-scale physical banner designed and handcrafted for the 'Blue Whales' house. Originally created for the Inter-House Cheer & Dance competition, it served as the primary emblem for Sports Day and school orientation events.",
    image: `${process.env.PUBLIC_URL}/images/BlueHouse/b1.jpg`,
    category: "Design",
    gallery: [
      `${process.env.PUBLIC_URL}/images/BlueHouse/b2.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b3.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b4.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b5.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b6.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b7.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b1.jpg`,
    ],
    sections: [
      {
        title: "Tools & Materials",
        content: "Procreate (iPad for initial concepts & typography), Acrylic Paint, Large Fabric Canvas, Various Brushes & Craft Supplies."
      },
      {
        title: "The Design Process",
        content: [
          "Digital Ideation: Started on the iPad using Procreate to quickly iterate through different compositions, color palettes, and typography treatments for the 'Blue Whales' theme.",
          "Scaling Up: The biggest technical hurdle was translating a small digital sketch onto a massive physical banner while maintaining accurate proportions.",
          "Physical Execution: Moving from screen to canvas, the design was hand-painted onto the banner, requiring careful layering of acrylics to achieve vibrant, opaque colors."
        ]
      },
      {
        title: "Role in the Project",
        content: "I served as the Lead Designer and Project Lead. I was responsible for the entire creative direction—from generating the initial concepts and digital sketches to overseeing the physical painting process. While house members assisted with materials and logistics, I executed the core design work and guided the team during the final production phase."
      },
      {
        title: "Challenges Faced",
        content: "The primary challenge was project management. Executing a large-scale physical artwork requires significant time, which had to be balanced alongside academic commitments during an active school semester. It required strict time allocation to meet the event deadlines without compromising quality."
      }
    ]
  },
  {
    id: 5,
    title: "The Hariz Portfolio",
    description: "The website you are looking at right now! A modern, responsive personal portfolio built with React.js to showcase my journey as a developer and designer.",
    image: `${process.env.PUBLIC_URL}/images/portfolio/pflio.png`, // You should take a screenshot of your homepage for this!
    category: "Web Development",
    gallery: [], // You can add screenshots of your mobile view or 'About' page here later
    sections: [
      {
        title: "Technologies Used",
        content: "React.js, Tailwind CSS, React Router, GitHub Pages, GitHub Actions (CI/CD)"
      },
      {
        title: "Features",
        content: [
          "Dynamic Project Routing: Built a scalable system where a single 'Project Detail' component dynamically renders content based on the URL ID.",
          "Category Filtering: Implemented a live filtering system using React State to sort projects by category (Web, Mobile, Design, etc.).",
          "Data-Driven Architecture: Separated content from logic by storing project data in structured JSON files, making it easy to add new projects without touching the code.",
          "Automated Deployment: Configured a CI/CD pipeline using GitHub Actions to automatically build and deploy the site whenever code is pushed."
        ]
      },
      {
        title: "Role in the Project",
        content: "I designed and developed this site from scratch. My goal was to move away from static HTML templates and build a component-based application that is easy to maintain and scale."
      },
      {
        title: "Challenges Faced",
        content: "One major technical hurdle was handling client-side routing on GitHub Pages. Since GitHub Pages is a static host, refreshing a sub-page (like /portfolio/1) often results in a 404 error. I had to configure the deployment workflow and use HashRouter (or specific Single Page App scripts) to ensure direct links work correctly."
      },
      {
        title: "Learning Outcomes",
        content: [
          "Deepened understanding of React Hooks (useState, useEffect, useParams).",
          "Learned how to set up a professional folder structure (separating Pages, Components, and Data).",
          "Gained practical experience with Continuous Integration/Continuous Deployment (CI/CD) workflows."
        ]
      },
      {
        title: "Future Improvements",
        content: "I plan to add a 'Dark Mode' toggle using Tailwind's dark theme capabilities and potentially integrate a headless CMS so I can update the portfolio content from a dashboard instead of editing code."
      }
    ]
  },
];