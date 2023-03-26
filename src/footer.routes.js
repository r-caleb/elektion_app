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
    route: "/",
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
      name: "Navigation",
      items: [
        { name: "Accueil", href: "https://www.creative-tim.com/presentation" },
        {
          name: "Candidat",
          href: "https://www.creative-tim.com/templates/free",
        },
        {
          name: "Centre",
          href: "https://www.creative-tim.com/templates/premium",
        },
        { name: "Actualités", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "Aide et Soutien",
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
    {
      name: "",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        {
          name: "affiliate program",
          href: "https://www.creative-tim.com/affiliates/new",
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
