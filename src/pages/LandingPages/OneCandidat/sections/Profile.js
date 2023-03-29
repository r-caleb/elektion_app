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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";
function createData(type, num, sexe, parti, circonscription, province) {
  return { type, num, sexe, parti, circonscription, province };
}

function Profile({ candidat }) {
  const rows = [
    createData("Type", candidat.scrutin),
    createData("Numéro", candidat.numeroCandidat),
    createData("Genre", candidat.sexe),
    createData("Parti", candidat.parti_politique),
    createData("Circonscription", candidat.circonscription),
    createData("Province", candidat.province),
  ];
  console.log(candidat);
  return (
    <MKBox component="section" py={{ xs: 4, sm: 1 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar
              src={`https://elektion.de-vie.com/web/assets/images/PhotoCandidats/${candidat.photoCandidat}`}
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
          <Grid container justifyContent="center" py={2}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <MKTypography variant="h3">{candidat.nom}</MKTypography>
                <MKButton size="small">
                  <MKAvatar
                    src={`https://elektion.de-vie.com/web/assets/images/logoParti/${candidat.logo_parti}`}
                    alt="Candidat"
                    size="xxl"
                    shadow="xl"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "10%",
                      objectFit: "cover",
                    }}
                  />
                </MKButton>
              </MKBox>
              <Grid container spacing={3} my={3}>
              <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.type}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.type}
                      </TableCell>
                      <TableCell align="right">{row.num}</TableCell>
                      <TableCell align="right">{row.sexe}</TableCell>
                      <TableCell align="right">{row.parti}</TableCell>
                      <TableCell align="right">{row.circonscription}</TableCell>
                      <TableCell align="right">{row.province}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
