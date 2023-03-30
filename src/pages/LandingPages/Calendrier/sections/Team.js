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
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "../calendar.scss";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { AiOutlineSearch } from "react-icons/ai";
import moment from "moment/min/moment-with-locales";
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
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  width: 950,
  color: theme.palette.text.primary,
}));

  const Team = () => {
    const [input, setInput] = useState("");
    const [calendar, setCalendar] = useState();
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    useEffect(() => {
      fetch(`https://de-vie.com/processus_E_api/api/calend`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCalendar(data.calend);
        });
    }, []);
    moment.locale("fr");

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
            Calendrier électoral 2022-2024
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
            Le calendrier électoral liste les élections aux fonctions politiques dans les différentes entités territoriales où elles sont organisées.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            {/* <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Emma Roberts"
                position={{ color: "info", label: "UI Designer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {calendar?.map((calend) => (
          <StyledPaper
            sx={{
              my: 1,
              p: 2,
            }}
            key={calend.id}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Typography variant="h1" className="date">
                  {moment(calend.date).format("Do MMMM YYYY")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="py-1" variant="h1">
                  Evénement
                </Typography>
                <Typography className="py-1">{calend.titre}</Typography>
              </Grid>
            </Grid>
          </StyledPaper>
        ))}
      </Box>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
