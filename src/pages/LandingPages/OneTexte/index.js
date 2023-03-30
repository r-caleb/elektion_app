import React from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
// import Profile from "pages/LandingPages/Author/sections/Profile";
import Posts from "pages/LandingPages/TexteLegaux/sections/Posts";
// import Contact from "pages/LandingPages/Author/sections/Contact";
import DefaultFooter from "examples/Footers/DefaultFooter";

// import Footer from "pages/LandingPages/Author/sections/Footer";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/legaltext.jpg";
import Textes from "./sections/Textes";

const OneTexte = () => {
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
          {/* <Profile /> */}
          <Textes />
        </Card>
        
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default OneTexte;