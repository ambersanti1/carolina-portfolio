import meditrack from "../img/meditrack-logo (2).png";
import treefund from "../img/treefund-logo.png";
import wanderlust from "../img/wanderlust.png";
import meditrackDemo from "../img/meditrack-demo.png";
import treefundDemo from "../img/treefund-demo.png";
import wanderlustationDemo from "../img/wanderlustation-demo.png";
import gymfront from "../img/gym-front.svg"
import gymlogo from "../img/gym-logo.svg"
import luxefront from "../img/luxe-front.svg"
import luxelogo from "../img/luxe-logo.svg"
import finnfront from "../img/finn-front.svg"
import finnlogo from "../img/finn-logo.svg"
import ecookfront from "../img/ecookfront.svg"
import ecooklogo from "../img/ecooklogo.svg"


const projects = [
  {
    id: 1,
    project_title: "Meditrack",
    project_description:
      "Applcation to save appointments and track treatments easily. It uses Google Maps to find hospitals and display maps, and it quickly searches for medications using the Canadian Drug API.",
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
    project_title: "Gym High Life",
    project_description:
      "This website was created for High Life Gym, incorporating WooCommerce to facilitate users in purchasing various membership plans.",
    project_img: gymlogo,
    project_img2: gymfront,
    reverse: "reverse",
    direction: "left",
    direction_p: "left-p",
    link: "https://www.high-life-gym.com/",
    icon1: "fa-brands fa-wordpress",
    icon2: "fa-brands fa-cc-paypal",
    icon3: "fa-brands fa-cc-stripe",
    icon4: "fa-brands fa-elementor",
  },
  {
    id: 3,
    project_title: "Luxe",
    project_description:
      "Luxe is an e-commerce site build on WordPress and integrated with PayPal. It was created to elevate the client brand's online presence with a stylish and secure platform to showcase and sell their products effortlessly.",
    project_img: luxelogo,
    project_img2: luxefront,
    direction: "right",
    direction_p: "right-p",
    link: "https://www.luxe.amberly.site/",
    icon1: "fa-brands fa-wordpress",
    icon2: "fa-brands fa-cc-paypal",
    icon3: "fa-brands fa-cc-stripe",
    icon4: "fa-brands fa-elementor",
  },
  {
    id: 4,
    project_title: "TreeFund",
    project_description:
      "Donation website to restore Mexico's natural ecosystems. TreeFund makes it easy to contribute to this revolutionary change by donating through Stripe.",
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
    id: 5,
    project_title: "Wanderlustation",
    project_description:
      "Travel blog to dive into a world of captivating travel stories, stunning photography, and amazing travel tips that will ignite your wanderlust. ",
    project_img: wanderlust,
    project_img2: wanderlustationDemo,
    direction: "right",
    direction_p: "right-p",
    link: "https://wanderlustation.com/",
    icon1: "fa-brands fa-wordpress",
    icon2: "fa-brands fa-bootstrap",
    icon3: "fa-brands fa-sass",
    icon4: "fa-brands fa-php",
    icon5: "fa-brands fa-css3-alt",
  },
  {
    id: 6,
    project_title: "ecook",
    project_description:
      "Ecook is a mexican food blog, where you can find recipes ranging from quick weekday meals to impressive dishes for entertaining. This website is SEO friendly and includes Google Ads and Google Analytics, so the client can monitor the website views.",
    reverse: "reverse",
    project_img: ecooklogo,
    project_img2: ecookfront,
    direction: "left",
    direction_p: "left-p",
    link: "https://ecook.mx/",
    icon1: "fa-brands fa-wordpress",
    icon2: "fa-brands fa-css3-alt",
    icon3: "fa-brands fa-html5",
    icon4: "fa-brands fa-elementor",
  },
  {
    id: 7,
    project_title: "Finn Academy",
    project_description:
      "Finn Academy is an online learning and teaching marketplace specialized in finance. Students can access to free articles or hire the standard or gold membership and access to hundreds of information.",
    project_img: finnlogo,
    project_img2: finnfront,

    direction: "right",
    direction_p: "right-p",
    link: "https://www.finn-academy.amberly.site/",
    icon1: "fa-brands fa-wordpress",
    icon2: "fa-brands fa-cc-paypal",
    icon3: "fa-brands fa-cc-stripe",
    icon4: "fa-brands fa-elementor",
  },
];

export default projects;
