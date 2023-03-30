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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";

function Profile({ parti }) {
  console.log(parti);
  return (
    <MKBox component="section" py={{ xs: 4, sm: 1 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar
              src={`https://elektion.de-vie.com/web/assets/images/logoParti/${parti.logo}`}
              alt="Candidat"
              size="xxl"
              shadow="xl"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
