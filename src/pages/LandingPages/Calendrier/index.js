import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/Calendrier/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/Calendrier/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
// import bgImage from "assets/images/bg-about-us.jpg";
import calendar from "assets/images/calendar.jpg"

const Calendrier = () => {
  // const [calendar, SetCalendar] = useState([]);

  // const fetchData = () => {
  //   fetch(`https://de-vie.com/processus_E_api/api/calend`)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     SetCalendar(data.calend)
  //   })
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${calendar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
          
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Information /> */}
        <Team />
        {/* <Featuring /> */}
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Calendrier;
