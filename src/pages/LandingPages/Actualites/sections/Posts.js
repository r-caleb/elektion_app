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

import routes from "routes";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import { useEffect, useState } from "react";


function Places() {
  const [infos, setInfo] = useState([]);
 

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

 

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
          Pour une intégrité totale aux elections, garder la confiance de la population et la transparence à chaque étape du processus électorale est importante.
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {infos?.map((info) => (
            <Grid item xs={12} sm={6} lg={3} key={info.id} >
            <TransparentBlogCard 
              image= {`http://elektion.de-vie.com/web/assets/images/ImageArticle/${info?.image}`}
              title={info.titre}
              description={info.contenu.slice(0, 100)}
              action={{
                type: "internal",
                route: `/news/${info.id}`, 
                color: "info",
                label: "Lire",
              }}
            />
          </Grid>
          ))

          }
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
