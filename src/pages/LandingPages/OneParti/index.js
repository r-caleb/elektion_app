import React, { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

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

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "./sections/Profile";
import Posts from "./sections/Posts";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// Routes
import routes from "routes";
import calendar from "assets/images/calendar.jpg";

// Images
import bgImage from "assets/images/city-profile.jpg";
import { useParams } from "react-router-dom";

function createData(name, fondateur, nbrPres, nbreNat, nbrProv) {
  return { name, fondateur, nbrPres, nbreNat, nbrProv };
}

const OneParti = () => {
  const [parti, setParti] = useState([]);
  const nom = useParams();
  let nomParti = nom.nom.slice(0, -1);

  useEffect(() => {
    fetch(
      `https://de-vie.com/processus_E_api/api/get_parti_partie?search=${nomParti}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setParti(data.data[0]);
      });
  }, []);
  const rows = [
    createData("Nom du Parti", parti.nom),
    createData("Fondateur", parti.fondateur),
    createData("Nombre des Candidats Président", parti.NbrCandidatPres),
    createData("Nombre des Candidats Député National", parti.NbrCandidatNat),
    createData("Nombre des Candidats Député Provincial", parti.NbrCandidatProv),
  ];
  return (
    <>
     <DefaultNavbar routes={routes} sticky />
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
              )}, url(${calendar})`,
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
          <Profile parti={parti} />
          <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h4">
                Informations sur le parti
              </MKTypography>
            </Grid>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.fondateur}</TableCell>
                      <TableCell align="right">{row.NbrCandidatPres}</TableCell>
                      <TableCell align="right">{row.NbrCandidatNat}</TableCell>
                      <TableCell align="right">{row.NbrCandidatProv}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Card>

        <Footer />
      </MKBox>
    </>
  );
};

export default OneParti;
