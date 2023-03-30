import React, { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";

// Author page sections
import Posts from "./sections/Posts";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Team from "./sections/Team";
import calendar from "assets/images/calendar.jpg";

const Parti = () => {
  const [parti, setParti] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch("https://de-vie.com/processus_E_api/api/get_parti_partie")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setParti(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(parti);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
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
              )},url(${calendar})`,
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
          <Container sx={{ mt: 4 }}>
            <MKTypography
              variant="h4"
              color="blue"
              textAlign="left"
              px={{ xs: 6, lg: 12 }}
            >
              Tous les partis politiques agrées par l'état de la république
              démocratique du Congo
            </MKTypography>
          </Container>
          <Team parti={parti} input={input} />
        </Card>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Parti;
