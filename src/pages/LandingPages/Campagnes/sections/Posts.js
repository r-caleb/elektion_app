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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import { useEffect, useState } from "react";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
// import post1 from "assets/images/examples/testimonial-6-2.jpg";
// import post2 from "assets/images/examples/testimonial-6-3.jpg";
// import post3 from "assets/images/examples/blog-9-4.jpg";
// import post4 from "assets/images/examples/blog2.jpg";

function Places() {
  const [dispositions, setDispositions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://de-vie.com/processus_E_api/api/campagne`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDispositions(data.data);
      });
  }, []);
  console.log(dispositions);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(dispositions);
  const groupObjectByField = (items, field) => {
    const outputs = {};
    items.forEach((item) => {
      if (outputs.hasOwnProperty(item[field])) {
        outputs[item[field]].values.push(item);
      } else {
        outputs[item[field]] = { nom: item[field], values: [item] };
      }
    });
    return Object.values(outputs);
  };
  const textesLegaux = groupObjectByField(dispositions, "nom");
  

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
          Dispositions légales sur la campagne électoral et le vote
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
        {dispositions &&
          dispositions
            .filter((value) =>
              input
                ? value.titre.toLowerCase().includes(input.toLowerCase())
                : true
            )
            .map((info) => (
          <Grid item xs={12} sm={6} lg={3} key={dispositions.id}>
            <TransparentBlogCard
              image={`http://elektion.de-vie.com/web/assets/images/ImageArticle/${info?.image}`}
              title={info.titre}
              // description=
              action={{
                type: "internal",
                route: "#",
                color: "info",
                // label: "read more",
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
