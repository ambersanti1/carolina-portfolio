import meditrack from "../img/meditrack-logo (2).png";
import treefund from "../img/treefund-logo.png";
import journal from "../img/journal-logo (2).png";
import home from "../img/home-img.jpg";


const projects = [
  {
    id: 1,
    project_title: "Meditrack",
    project_description:
      "Schedule appointments and keep track of the medical treatment",
    project_img: meditrack,
    direction: "right",
  },
  {
    id: 2,
    project_title: "Journal",
    project_description: "Add, edit, save and delete notes",
    project_img: journal,
    reverse: "reverse",
    direction: "left",
  },
  {
    id: 3,
    project_title: "TreeFund",
    project_description:
      "Accepts donations through stripe to plant trees in Mexico",
    project_img: treefund,
    direction: "right"
  },
  {
    id: 4,
    project_title: "Project",
    project_description: "Coming soon",
    project_img: home,
    reverse: "reverse",
    direction: "left"
  },
];

export default projects;
