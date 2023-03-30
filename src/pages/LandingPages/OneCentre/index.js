import React, { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
import "./centerScreen.scss";
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
    fetch(`https://de-vie.com/processus_E_api/api/list_centre?search=${input}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCenter(data.data);
      });
  };
  console.log(input);
  useEffect(() => {
    fetchData();
  }, [input]);
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
              <div>
                {nomProvince} :<span> {provinceCenter.length} centres</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Chercher un centre"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">
                  <AiOutlineSearch size={22} />
                </button>
              </form>
            </Row>
            <Row className="center_title title">
              <div>Circonscription de </div>
              <div>
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
              </div>
            </Row>
            {communeCenter?.map((center) => (
              <div className="town__center" key={center.name}>
                <div>
                  <div className="quarter">{center.name}</div>
                  <Row className="data_center">
                    {center.values.map((item) => (
                      <Row className="separate">
                        <div>
                          <strong>{item.nomCentre}</strong>
                        </div>
                        <div>{item.NbrDesBureaux} bureaux de votes</div>
                        <div>{item.adresse}</div>
                      </Row>
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
