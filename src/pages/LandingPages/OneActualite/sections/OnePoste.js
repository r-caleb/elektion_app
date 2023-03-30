import routes from "routes";
// @mui material components
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import { useEffect, useState } from "react";

import { Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
// import avatar from "../home/assets/rc.jpg";
import "../infoScreen.scss";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";
// import moment from "moment/min/moment-with-locales";

const OnePoste = () => {
  const [infos, setInfo] = useState([]);
  const id = useParams();
  let url = `https://uwazzi-plateforms.vercel.app/infos/${id.id}`;

  const fetchData = () => {
    fetch("https://de-vie.com/processus_E_api/api/articles?search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfo(data.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const news = infos.filter((info) => info && info.id == id.id);
  // moment.locale("fr");

  return (
   
    <MKBox component="section" py={2}>
    
       <Container className="news">
       <h4 className="title">Actualités</h4>
        <hr />
       <Row>
        <Col>
          <div className="news__read">
          <h2>{news[0]?.titre}</h2>
            <hr />
            <p>{news[0]?.date}</p>
             <img
              src={`http://elektion.de-vie.com/web/assets/images/ImageArticle/${news[0]?.image}`}
              alt="info_image"
            />
            <br />
            <br />
            <p dangerouslySetInnerHTML={{ __html: news[0]?.contenu }} />
          </div>
          <div className="social_link">
            <p>Partager sur :</p>
            <div>
              <FacebookShareButton url={url}>
                <FacebookIcon size={32} round logoFillColor="white" />
              </FacebookShareButton>
              <FacebookMessengerShareButton url={url}>
                <FacebookMessengerIcon size={32} round logoFillColor="white" />
              </FacebookMessengerShareButton>
              <WhatsappShareButton title="visitez cet article" url={url}>
                <WhatsappIcon size={32} round logoFillColor="white" />
              </WhatsappShareButton>
              <TwitterShareButton url={url}>
                <TwitterIcon size={32} round logoFillColor="white" />
              </TwitterShareButton>
            </div>
          </div>
        </Col>
        <Col lg={3} md={4} className="g-4">
          {infos.map((info) => (
            <Link to={`/infos/${info.id}`} key={info.id}>
              <Col>
                <Card className="bg-dark text-white news__card1">
                  <Card.Img
                    src={`http://elektion.de-vie.com/web/assets/images/ImageArticle/${info?.image}`}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Body className="bottom_left">
                      <Card.Title className="title_info">
                        {info.titre}
                      </Card.Title>
                      <Card.Text style={{ textDecoration: "underline" }}>
                        {info.date}
                      </Card.Text>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Link>
          ))}
        </Col>
      </Row>
    </Container>     
      
    </MKBox>
    
  );
};

export default OnePoste;