import React, { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Posts from "pages/LandingPages/Candidat/sections/Posts";
import Contact from "pages/LandingPages/Candidat/sections/Contact";
import Footer from "pages/LandingPages/Candidat/sections/Footer";
// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";
import Team from "./sections/Team";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const OneCentre = () => {
  const [activeElement, setActiveElement] = useState(
    "Selectionner un district"
  );
  const [centers, setCenter] = useState([]);
  const [input, setInput] = useState("");
  const province = useParams();
  let nomProvince = province.province;
  const fetchData = () => {
    fetch(
      `https://de-vie.com/processus_E_api/api/list_centre?search=${input}&id`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCenter(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const centerProvince = centers.filter(
    (center) => center.province === nomProvince
  );
  const provinceCenter = centerProvince.filter((center) =>
    activeElement !== "Selectionner un district"
      ? center.circonscription === activeElement
      : true
  );
  const handleSelect = (e) => {
    setActiveElement(e.target.value);
  };
  const categoryAll = centerProvince.map((center) => center.circonscription);
  var categories = [...new Set(categoryAll)];
  const groupObjectByField = (items, field) => {
    const outputs = {};
    items.forEach((item) => {
      if (outputs.hasOwnProperty(item[field])) {
        outputs[item[field]].values.push(item);
      } else {
        outputs[item[field]] = { name: item[field], values: [item] };
      }
    });
    return Object.values(outputs);
  };
  const communeCenter = groupObjectByField(provinceCenter, "territoire");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
          <Container>
            <Row className="center_title title">
              <Col>{nomProvince}</Col>
              <Col>{provinceCenter.length} centres électoraux</Col>
            </Row>
            <Row className="center_title title">
              <Col>Circonscription de </Col>
              <Col>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleSelect}
                >
                  <option>Selectionner un district</option>
                  {categories.map((center) => (
                    <option value={center} key={center}>
                      {center}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
            {communeCenter?.map((center) => (
              <div className="town__center" key={center.name}>
                <div>
                  <div className="quarter">{center.name}</div>
                  <Row className="data_center">
                    {center.values.map((item) => (
                      <Link
                        to={`/center/stat/${item.nomCentre},${nomProvince}`}
                        title="Cliquez pour voir plus de détails sur le centre"
                      >
                        <Row className="separate">
                          <Col>
                            <strong>{item.nomCentre}</strong>
                          </Col>
                          <Col>{item.NbrDesBureaux} bureaux de votes</Col>
                          <Col>{item.adresse}</Col>
                        </Row>
                      </Link>
                    ))}
                  </Row>
                </div>
              </div>
            ))}
          </Container>
        </Card>
        <Footer />
      </MKBox>
    </>
  );
};

export default OneCentre;
