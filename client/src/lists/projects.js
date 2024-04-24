import meditrack from "../img/meditrack-logo (2).png";
import treefund from "../img/treefund-logo.png";
import wanderlust from "../img/wanderlust.png";
import meditrackDemo from "../img/meditrack-demo.png";
import treefundDemo from "../img/treefund-demo.png";
import wanderlustationDemo from "../img/wanderlustation-demo.png";


const projects = [
  {
    id: 1,
    project_title: "Meditrack",
    project_description:
      "During medical treatment, it can be a hassle to remember when to take your next pill or when your next doctor's appointment is. With Meditrack, you can save appointments and track your treatments easily. It even uses Google Maps to find hospitals and displays maps, and it quickly searches for medications using the Canadian Drug API.",
    project_img: meditrack,
    project_img2: meditrackDemo,
    direction: "right",
    direction_p: "right-p",
    link: "https://meditrack-ae96a66b7968.herokuapp.com/",
    linkGit: "https://github.com/ambersanti1/meditrack-application",
    icon1: "fa-brands fa-google-plus",
    icon2: "fa-brands fa-js",
    icon3: "fa-solid fa-database",
    pIcon: "MySQL",
    icon4: "fa-brands fa-html5",
    icon5: "fa-brands fa-css3-alt",
  },

  {
    id: 2,
    project_title: "TreeFund",
    project_description:
      "Join the movement to restore Mexico's natural ecosystems. Our app makes it easy to contribute to this revolutionary change by donating through Stripe. Your donations will help plant trees across Mexico, fostering the recovery of natural spaces.",
    project_img: treefund,
    project_img2: treefundDemo,
    reverse: "reverse",
    direction: "left",
    direction_p: "left-p",
    link: "https://treefund-b757cb53a6e1.herokuapp.com/",
    linkGit: "https://github.com/ambersanti1/TreeFund",
    icon1: "fa-brands fa-cc-stripe",
    icon2: "fa-brands fa-react",
    icon3: "fa-solid fa-database",
    pIcon: "MongoDB",
    icon4: "fa-brands fa-html5",
    icon5: "fa-brands fa-css3-alt",
  },
  {
    id: 3,
    project_title: "Wanderlustation",
    project_description:
      "Embark on a journey of exploration with our travel magazine website! Dive into a world of captivating stories, stunning photography, and expert insights that will ignite your wanderlust. Whether you're seeking travel inspiration, practical tips, or in-depth destination guides, our magazine has it all. Join our community and let the adventure begin!",
    project_img: wanderlust,
    project_img2: wanderlustationDemo,
    direction: "right",
    direction_p: "right-p",
    link: "https://wanderlustation.com",
    linkGit: "https://github.com/ambersanti1/wanderlustation",
    icon1: "fa-brands fa-wordpress",
    icon2: "fa-brands fa-bootstrap",
    icon3: "fa-brands fa-sass",
    icon4: "fa-brands fa-php",
    icon5: "fa-brands fa-css3-alt",
  },
];

export default projects;
