import meditrack from "../img/meditrack-logo (2).png";
import treefund from "../img/treefund-logo.png";

const projects = [
  {
    id: 1,
    project_title: "Meditrack",
    project_description:
      "This website allows you to book appointments with doctors in various fields, store your medical records, and monitor treatments. It's designed to securely store patients' medical data in one location, enabling registered doctors to easily access their records with permission.",
    project_img: meditrack,
    direction: "right",
    direction_p: "right-p",
    link: "https://meditrack-ae96a66b7968.herokuapp.com/",
    linkGit: "https://github.com/ambersanti1/meditrack-application",
  },

  {
    id: 2,
    project_title: "TreeFund",
    project_description:
      "Know what's happening with the natural ecosystems in Mexico and be part of the revolutionary change that recovers natural spaces.This application accepts donations through stripe to plant trees in Mexico.",
    project_img: treefund,
    reverse: "reverse",
    direction: "left",
    direction_p: "left-p",
    link: "https://treefund-b757cb53a6e1.herokuapp.com/",
    linkGit: "https://github.com/ambersanti1/TreeFund",
  },
];

export default projects;
