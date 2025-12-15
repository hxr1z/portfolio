// src/data/projects.js

export const projects = [
  {
    id: 7,
    title: "Travel List App",
    description: "A Business Card which can project objects in augmented reality when pointed at with a camera.",
    image: `${process.env.PUBLIC_URL}`, // You might want to update this with a real path
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
    image: `${process.env.PUBLIC_URL}`, // Update this too
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