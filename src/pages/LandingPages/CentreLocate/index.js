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

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
// Author page sections
import Posts from "./sections/Posts";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./mapScreen.scss";
import { Container, Row, Col } from "react-bootstrap";
// Routes
  import DefaultFooter from "examples/Footers/DefaultFooter";
  import footerRoutes from "footer.routes";
// Images
import bgImage from "assets/images/city-profile.jpg";
import Team from "./sections/Team";
import { Link } from "react-router-dom";
const CentreLocate = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBjexJKCSt9g8B1RQXS2LDqKX60Si-4cGc",
    libraries: ["places"],
  });
  console.log(process.env.REACT_APP_MAP);
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const location = UseGeolocation();
  const center = { lat: -4.3015999, lng: 15.3145944 };
  const showbuzz = { lat: -4.322195258016164, lng: 15.272767420704044 };
  const bukin = { lat: -4.322342359945673, lng: 15.276442046855236 };
  const planeteJ = { lat: -4.319967328927121, lng: 15.274113889547799 };
  const elikya = { lat: -4.300587791485096, lng: 15.31596061238327 };
  const hunga = { lat: -4.301154818524037, lng: 15.313203301665443 };
  const fpi = { lat: -4.303029749279593, lng: 15.317199792849854 };

  const actualPosition = {
    lat: location.coordinates.lat,
    lng: location.coordinates.lng,
  };

  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    console.log(directionsResponse);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }
  if (!isLoaded) {
    return <div>Chargement.........</div>;
  }

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
          <div className="map__container">
            <div className="map__google_box">
              <p>Localisation</p>
              <GoogleMap
                center={center}
                zoom={17}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={{
                  zoomControl: true,
                  streetViewControl: true,
                  mapTypeControl: true,
                  fullscreenControl: true,
                }}
                onLoad={(map) => setMap(map)}
              >
                <MarkerF position={center} />
                <MarkerF position={actualPosition} />
                <MarkerF position={bukin} />
                <MarkerF position={showbuzz} />
                <MarkerF position={planeteJ} />
                <MarkerF position={elikya} />
                <MarkerF position={fpi} />
                <MarkerF position={hunga} />

                {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
              </GoogleMap>
            </div>
            <div className="map__form__calcul">
              <Row className="map__form">
                <Col>
                  <Autocomplete>
                    <input type="text" placeholder="Origine" ref={originRef} />
                  </Autocomplete>
                </Col>
                <Col>
                  <Autocomplete>
                    <input
                      type="text"
                      placeholder="Destination"
                      ref={destiantionRef}
                    />
                  </Autocomplete>
                </Col>
                <Col className="map__form__button">
                  <button type="submit" onClick={calculateRoute}>
                    Itinéraire
                  </button>
                </Col>
                <Col className="map__form__button2">
                  <button onClick={clearRoute}>
                    <FaTimes />
                  </button>
                </Col>
              </Row>
              <Row className="map__calcul">
                <Col>
                  <p>Distance: {distance} </p>
                </Col>
                <Col>
                  <p>Durée: {duration} </p>
                </Col>
                <Col>
                  <button
                    onClick={() => {
                      map.panTo(actualPosition);
                      map.setZoom(17);
                    }}
                  >
                    <FaLocationArrow size={15} className="arrow" />
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default CentreLocate;
