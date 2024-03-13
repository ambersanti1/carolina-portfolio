import meditrack from "../img/meditrack-logo (2).png";
import treefund from "../img/treefund-logo.png";
import journal from "../img/journal-logo (2).png";
import home from "../img/home-img.jpg";


const projects = [
  {
    id: 1,
    project_title: "Meditrack",
    project_description:
      "This website allows you to book appointments with doctors in various fields, store your medical records, and monitor treatments. It's designed to securely store patients' medical data in one location, enabling registered doctors to easily access their records with permission.",
    project_img: meditrack,
    direction: "right",
    direction_p: "right-p",
  },
  {
    id: 2,
    project_title: "Journal",
    project_description:
      "Ever wanted to jot down your thoughts about the day? With this app, you can easily record, edit, save, or delete your daily entries in your journal.",
    project_img: journal,
    reverse: "reverse",
    direction: "left",
    direction_p: "left-p",
  },
  {
    id: 3,
    project_title: "TreeFund",
    project_description:
      "Know what's happening with the natural ecosystems in Mexico and be part of the revolutionary change that recovers natural spaces.This application accepts donations through stripe to plant trees in Mexico.",
    project_img: treefund,
    direction: "right",
    direction_p: "right-p",
  },
  {
    id: 2,
    project_title: "Journal",
    project_description: "Add, edit, save and delete notes",
    project_img: journal,
    reverse: "reverse",
    direction: "left",
    direction_p: "left-p",
  },
];

export default projects;
