import meditrack from "../img/meditrack-logo (2).png";
import treefund from "../img/treefund-logo.png";

const projects = [
  {
    id: 1,
    project_title: "Meditrack",
    project_description:
      "This app lets you save medical appointments and manage your treatments. It uses the Google Maps API to find hospitals and display maps. Plus, it utilizes the Canadian Drug API to quickly search for medications when adding treatments. It's built to securely store all patient data in one place.",
    project_img: meditrack,
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
];

export default projects;
