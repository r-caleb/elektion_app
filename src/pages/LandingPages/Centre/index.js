import React, { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import { AiOutlineSearch } from "react-icons/ai";
import footerRoutes from "footer.routes";
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Posts from "pages/LandingPages/Candidat/sections/Posts";
import Contact from "pages/LandingPages/Candidat/sections/Contact";
import Footer from "pages/LandingPages/Candidat/sections/Footer";
import "./centerScreen.scss";
import { Container, Row, Col } from "react-bootstrap";
import routes from "routes";
import DefaultFooter from "examples/Footers/DefaultFooter";
// Routes

// Images
import bgImage from "assets/images/city-profile.jpg";
import Team from "./sections/Team";
import { Link } from "react-router-dom";
const Centre = () => {
  const [provinces, setProvince] = useState([]);
  const [totalCentre, setTotalCentre] = useState("0");
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch("https://www.de-vie.com/processus_E_api/api/list_province?search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProvince(data.data.sort());
      });
  };
  const fetchCenterNumber = () => {
    fetch("https://de-vie.com/processus_E_api/api/list_centre?search&id")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTotalCentre(data.total_centre);
      });
  };
  useEffect(() => {
    fetchData();
    fetchCenterNumber();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(provinces);
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
            px: 20,
            py: 5,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          {/* <Team
            keywords={keywords}
            candidates={candidates}
            activeElement={activeElement}
            input={input}
            handleClick={handleClick}
          /> */}
          <Container>
            <div className="center_flex">
              <h4>
                Totals des centres : <span>{totalCentre}</span>
              </h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Chercher une province"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">
                  <AiOutlineSearch size={22} />
                </button>
              </form>
            </div>
            <Row className="center_title">
              <Col>Province</Col>
            </Row>
            {provinces &&
              provinces
                .filter((province) =>
                  input
                    ? province.nom.toLowerCase().includes(input.toLowerCase())
                    : true
                )
                .map((province) => (
                  <Link to={`/pages/centre/${province.nom}`} key={province.id}>
                    <Row className="data">
                      <Col>{province.nom}</Col>
                    </Row>
                  </Link>
                ))}
          </Container>
        </Card>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Centre;
