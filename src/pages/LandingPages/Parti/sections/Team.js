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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/team-5.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";
import { Link } from "react-router-dom";

function Team({ parti, input }) {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="transparent"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <MKBox mt={{ xs: 0, md: 0 }} sx={{ mb: 10 }} textAlign="center"></MKBox>
        <Grid container spacing={4}>
          {parti &&
            parti
              .filter((parti) =>
                input
                  ? parti.nom.toLowerCase().includes(input.toLowerCase())
                  : true
              )
              ?.map((parti) => (
                <Grid item xs={12} lg={6}>
                  <Link to={`/pages/parti/${parti.nom}}`} key={parti.nom}>
                    <MKBox mb={1}>
                      <HorizontalTeamCard
                        image={`https://elektion.de-vie.com/web/assets/images/logoParti/${parti.logo}`}
                        name={parti?.nom}
                        position={{
                          color: "info",
                          label: `${parti.fondateur}`,
                        }}
                        description={`Candidat parti.scrutin.replace(
                          "Legislatif",
                          "Député"
                       parti.parti_politique`}
                      />
                    </MKBox>
                  </Link>
                </Grid>
              ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
