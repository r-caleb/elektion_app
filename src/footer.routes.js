// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "ELEKTION APP",
    image: logoCT,
    route: "/presentation",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
  ],
  menus: [
    {
      name: "Menu",
      items: [
        { name: "Accueil", href: "/presentation" },
        {
          name: "Candidat",
          href: "/pages/candidat",
        },
        {
          name: "Parti Politique",
          href: "/pages/parti_politique",
        },
        { name: "Centres", href: "/pages/center" },
      ],
    },
    {
      name: "Autre menu",
      items: [
        { name: "Actualités", href: "/pages/news" },
        { name: "Textes Légaux", href: "/pages/legaltext" },
        { name: "Campagne & vote", href: "/pages/campaign" },
        {
          name: "Calendrier électoral",
          href: "/pages/electcalendar",
        },
      ],
    },
    {
      name: "Besoin d'aide",
      items: [
        {
          name: "Contactez-nous",
          href: "https://www.creative-tim.com/contact-us",
        },
      ],
    },
    {
      name: "legal",
      items: [
        {
          name: "Conditions d'utilisations",
          href: "https://www.creative-tim.com/terms",
        },
        {
          name: "Politique de confidentialité",
          href: "https://www.creative-tim.com/privacy",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Tous droits reservés. Copyright &copy; {date} ELEKTION APP
    </MKTypography>
  ),
};
