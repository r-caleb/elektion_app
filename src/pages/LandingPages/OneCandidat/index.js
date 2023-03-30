import React, { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "pages/LandingPages/OneCandidat/sections/Profile";
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
import { useParams } from "react-router-dom";
const OneCandidat = () => {
  const [candidat, setCandidat] = useState([]);
  const nom = useParams();
  let candidate = nom.nom.slice(0, -1);

  useEffect(() => {
    fetch(
      `https://www.de-vie.com/processus_E_api/api/list_candidat?filtre=Tous&search=${candidate}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.data[0]);
      });
  }, []);
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({
              functions: { linearGradient, rgba },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
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
          <Profile candidat={candidat} />
          <Grid container spacing={1} alignItems="flex-start" mx="auto">
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              lg={8}
              xl={4}
              ml={{ xs: "auto", lg: 18 }}
              mr={{ xs: "auto" }}
            >
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mt={{ xs: 5, sm: 5, md: 5 }}
                mb={{ xs: 5, sm: 5, md: 5 }}
                mx={3}
              >
                <MKBox
                  variant="gradient"
                  bgColor="info"
                  coloredShadow="info"
                  borderRadius="lg"
                  p={2}
                  mx={2}
                  mt={-3}
                >
                  <MKTypography
                    variant="h4"
                    color="white"
                    style={{ textAlign: "center" }}
                  >
                    Etudes et Formations
                  </MKTypography>
                </MKBox>
                <MKBox p={3}>
                  <MKTypography
                    variant="body2"
                    color="text"
                    mb={3}
                    px={3}
                    dangerouslySetInnerHTML={{
                      __html: candidat.formations,
                    }}
                  />
                </MKBox>
              </MKBox>
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              lg={8}
              xl={4}
              ml={{ xs: "auto" }}
              mr={{ xs: "auto", lg: 18 }}
            >
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mt={{ xs: 5, sm: 5, md: 5 }}
                mb={{ xs: 5, sm: 5, md: 5 }}
                mx={3}
              >
                <MKBox
                  variant="gradient"
                  bgColor="info"
                  coloredShadow="info"
                  borderRadius="lg"
                  p={2}
                  mx={2}
                  mt={-3}
                >
                  <MKTypography
                    variant="h4"
                    color="white"
                    style={{ textAlign: "center" }}
                  >
                    Expériences professionnelles
                  </MKTypography>
                </MKBox>
                <MKBox p={3}>
                  <MKTypography
                    variant="body2"
                    color="text"
                    mb={3}
                    px={3}
                    dangerouslySetInnerHTML={{
                      __html: candidat.Experience,
                    }}
                  />
                </MKBox>
              </MKBox>
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              lg={8}
              xl={4}
              ml={{ xs: "auto", lg: 18 }}
              mr={{ xs: "auto" }}
            >
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mt={{ xs: 5, sm: 5, md: 5 }}
                mb={{ xs: 5, sm: 5, md: 5 }}
                mx={3}
              >
                <MKBox
                  variant="gradient"
                  bgColor="info"
                  coloredShadow="info"
                  borderRadius="lg"
                  p={2}
                  mx={2}
                  mt={-3}
                >
                  <MKTypography
                    variant="h4"
                    color="white"
                    style={{ textAlign: "center" }}
                  >
                    Compétences
                  </MKTypography>
                </MKBox>
                <MKBox p={3}>
                  <MKTypography
                    variant="body2"
                    color="text"
                    mb={3}
                    px={3}
                    dangerouslySetInnerHTML={{
                      __html: candidat.competence,
                    }}
                  />
                </MKBox>
              </MKBox>
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              lg={8}
              xl={4}
              ml={{ xs: "auto" }}
              mr={{ xs: "auto", lg: 18 }}
            >
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mt={{ xs: 5, sm: 5, md: 5 }}
                mb={{ xs: 5, sm: 5, md: 5 }}
                mx={3}
              >
                <MKBox
                  variant="gradient"
                  bgColor="info"
                  coloredShadow="info"
                  borderRadius="lg"
                  p={2}
                  mx={2}
                  mt={-3}
                >
                  <MKTypography
                    variant="h4"
                    color="white"
                    style={{ textAlign: "center" }}
                  >
                    Langues
                  </MKTypography>
                </MKBox>
                <MKBox p={3}>
                  <MKTypography
                    variant="body2"
                    color="text"
                    mb={3}
                    px={3}
                    dangerouslySetInnerHTML={{
                      __html: candidat.Experience,
                    }}
                  />
                </MKBox>
              </MKBox>
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              lg={8}
              xl={4}
              ml={{ xs: "auto", lg: 18 }}
              mr={{ xs: "auto" }}
            >
              <MKBox
                bgColor="white"
                borderRadius="xl"
                shadow="lg"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mt={{ xs: 5, sm: 5, md: 5 }}
                mb={{ xs: 5, sm: 5, md: 5 }}
                mx={3}
              >
                <MKBox
                  variant="gradient"
                  bgColor="info"
                  coloredShadow="info"
                  borderRadius="lg"
                  p={2}
                  mx={2}
                  mt={-3}
                >
                  <MKTypography
                    variant="h4"
                    color="white"
                    style={{ textAlign: "center" }}
                  >
                    Centre d'interêt
                  </MKTypography>
                </MKBox>
                <MKBox p={3}>
                  <MKTypography
                    variant="body2"
                    color="text"
                    mb={3}
                    px={3}
                    dangerouslySetInnerHTML={{
                      __html: candidat.centreInteret,
                    }}
                  />
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
        </Card>
        <Footer />
      </MKBox>
    </>
  );
};

export default OneCandidat;
