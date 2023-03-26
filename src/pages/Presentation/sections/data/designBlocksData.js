/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import candidat from "../../../../assets/images/vote.jpg";
import parti from "../../../../assets/images/parti.png";
import centre from "../../../../assets/images/electa.jpg";
import news from "../../../../assets/images/news.png";
import juridique from "../../../../assets/images/juridique.png";
import campagne from "../../../../assets/images/campagne.png";
import calendrier from "../../../../assets/images/calendrier.png";
import map from "../../../../assets/images/map.png";
import fact from "../../../../assets/images/fact.png";

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Qui voter ?",
    description:
      "Consulter la liste de tous les partis politiques agrées par la CENI et leurs candidats",
    items: [
      {
        image: parti,
        name: "Espace des partis politiques",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: candidat,
        name: "Espace candidat",
        route: "/sections/page-sections/features",
      },
    ],
  },
  {
    title: "Où voter ?",
    description:
      "Consulter la liste des centres d'inscription et des différents centres de vote",
    items: [
      {
        image: centre,
        name: "Centres d'inscription et de vote",
        route: "/sections/navigation/navbars",
      },
    ],
  },
  {
    title: "Quelles sont les informations et dispositions légales ?",
    description:
      "Consulter les différents textes légaux électoraux et le calendrier électoral ",
    items: [
      {
        image: news,
        name: "Actualités",
        route: "Actualités",
      },
      {
        image: juridique,
        name: "Les textes légaux",
        route: "/sections/navigation/navbars",
      },
      {
        image: campagne,
        name: "Dispositions sur la campagne et le vote",
        route: "/sections/navigation/navbars",
      },
      {
        image: calendrier,
        name: "Calendrier électoral",
        route: "/sections/input-areas/forms",
      },
    ],
  },
  {
    title: "Outils",
    description: "Ces fonctionnalités pratiques vous seront utiles",
    items: [
      {
        image: map,
        name: "Avec la cartographie localiser le centre le plus proche de vous",
        route: "/sections/attention-catchers/alerts",
      },
      {
        image: fact,
        name: "Fact checking, cet espace vous fournit les réponses exactes aux différents rumeurs",
        route: "/sections/attention-catchers/alerts",
      },
    ],
  },
];
