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
    image: `${process.env.PUBLIC_URL}`, // Don't forget to add your image path later!
    category: "Web Development",
    gallery: [
      `${process.env.PUBLIC_URL}`,
      `${process.env.PUBLIC_URL}`,
      `${process.env.PUBLIC_URL}`,
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
    id: 7,
    title: "Travel List App",
    description: "A Business Card which can project objects in augmented reality when pointed at with a camera.",
    image: `${process.env.PUBLIC_URL}`, 
    category: "Web Development",
    gallery: [
      `${process.env.PUBLIC_URL}`,
      `${process.env.PUBLIC_URL}`,
      `${process.env.PUBLIC_URL}`,
    ]
  },
  {
    id: 6,
    title: "Task List Manager App",
    description: "A React Native app that allows you to keep track of tasks and indicate their completion status, while providing a summary of unfinished and completed tasks.",
    image: `${process.env.PUBLIC_URL}`,
    category: "Mobile Development",
    gallery: [
      `${process.env.PUBLIC_URL}`,
      `${process.env.PUBLIC_URL}`,
      `${process.env.PUBLIC_URL}`,
    ]
  },
  {
    id: 1,
    title: "AR Business Card with Logo",
    description: "A Business Card which can project objects in augmented reality when pointed at with a camera.",
    image: `${process.env.PUBLIC_URL}/images/VR Card/Screenshot 2025-12-12 111158.png`, 
    category: "Immersive Technologies",
    gallery: [
      `${process.env.PUBLIC_URL}/images/VR Card/IMG_1568.png`,
      `${process.env.PUBLIC_URL}/images/VR Card/FULL JPG.jpeg`,
      `${process.env.PUBLIC_URL}/images/VR Card/Muhammad Hariz Video Submission.mp4`,
    ]
  },
  {
    id: 2,
    title: "Cypher's Chamber Escape Room",
    description: "An Escape Room designed from scratch in Unity.",
    image: `${process.env.PUBLIC_URL}/images/VR Escape Room/Screenshot 2025-12-12 102904.png`,
    category: "Immersive Technologies",
    gallery: [
      `${process.env.PUBLIC_URL}/images/VR Escape Room/Screenshot 2025-12-12 102904.png`,
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
    title: "Swiss Blue Whales Banner Design",
    description: "The Swiss Blue House banner that I contributed to creating.",
    image: `${process.env.PUBLIC_URL}/images/BlueHouse/b1.jpg`,
    category: "Design",
    gallery: [
      `${process.env.PUBLIC_URL}/images/BlueHouse/b2.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b3.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b4.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b5.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b6.jpg`,
      `${process.env.PUBLIC_URL}/images/BlueHouse/b7.jpg`,
    ]
  },
  {
    id: 5,
    title: "The Hariz Portfolio",
    description: "My first attempt at a portfolio website using HTML and CSS.",
    image: ``,
    category: "Web Development",
    gallery: []
  }
];