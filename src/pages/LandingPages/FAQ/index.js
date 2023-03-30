import React, { useEffect, useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import UseGeolocation from "./UseGeolocation";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Posts from "./sections/Posts";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./mapScreen.scss";
import { Container, Row, Col } from "react-bootstrap";
// Routes
import routes from "routes";
import moment from "moment/min/moment-with-locales";

// Images
import bgImage from "assets/images/city-profile.jpg";
import Team from "./sections/Team";
import { Link } from "react-router-dom";
import MKTypography from "components/MKTypography";
const Faq = () => {
  const [faq, setFaq] = useState([]);

  const fetchData = () => {
    fetch("https://de-vie.com/processus_E_api/api/faqnews?search")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFaq(data.faq);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(faq);
  moment.locale("fr");
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
          <div>
            <MKTypography
              variant="h5"
              color="dark"
              style={{ textAlign: "center" }}
              sx={{
                py: 5,
              }}
            >
              Dans cet espace nous donnons des reponses par des sources fiables
              des différents rumeurs et informations reçues
            </MKTypography>
            {/*<Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{`La Ceni est incendié, Il y a 10 jours`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {`"Le dernier cas date de ce jeudi. Un document attribué au ministre en charge des Congolais de l'étranger, Emmanuel Ilunga faisait état de la décision de Kinshasa de n’accorder aux ressortissants français et belges que des "visas humanitaires ou pour soins."       "source: Ceni"`}
                </Typography>
              </AccordionDetails>
            </Accordion> */}
            {faq.map((faq) => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{faq.fakeinfos}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.precisionInfos}</Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>Source Ceni</Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography>{moment(faq.dateFake).fromNow()}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Card>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Faq;
