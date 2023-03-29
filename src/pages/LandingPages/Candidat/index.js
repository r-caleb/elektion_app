import React, { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Posts from "pages/LandingPages/Candidat/sections/Posts";
import Contact from "pages/LandingPages/Candidat/sections/Contact";
import Footer from "pages/LandingPages/Candidat/sections/Footer";
import "./candidat.scss";

// Routes
import routes from "routes";
const keywords = [
  "Tout",
  "Presidentielle",
  "Legislatif National",
  "Legislatif Provincial",
];

// Images
import bgImage from "assets/images/city-profile.jpg";
import Team from "./sections/Team";
const Candidat = () => {
  const [activeElement, setActiveElement] = useState("Tout");
  const [candidats, setCandidat] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch(
      "https://www.de-vie.com/processus_E_api/api/list_candidat?filtre=Tous&search="
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (value) => {
    setActiveElement(value);
  };
  const candidates = candidats.filter((candidat) =>
    activeElement !== "Tout" ? candidat.scrutin === activeElement : true
  );
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox bgColor="white">
        <MKBox
          minHeight="15rem"
          width="100%"
          sx={{
            backgroundImage: ({
              functions: { linearGradient, rgba },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}`,
            backgroundColor: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Team
            keywords={keywords}
            candidates={candidates}
            activeElement={activeElement}
            input={input}
            handleClick={handleClick}
          />
        </Card>
        <Footer />
      </MKBox>
    </>
  );
};

export default Candidat;
