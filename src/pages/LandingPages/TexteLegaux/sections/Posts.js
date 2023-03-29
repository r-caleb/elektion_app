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
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import justice from "assets/images/justice.png"
// import post1 from "assets/images/examples/testimonial-6-2.jpg";
// import post2 from "assets/images/examples/testimonial-6-3.jpg";
// import post3 from "assets/images/examples/blog-9-4.jpg";
// import post4 from "assets/images/examples/blog2.jpg";
import { useEffect, useState } from "react";

function Places() {
  const [textes, setTextes] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch(`https://de-vie.com/processus_E_api/api/get_loi_text_legeaux`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setTextes(data);
    })
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  

  // console.log(textes);
  const groupObjectByField = (items, field) => {
    const outputs = {};
    // console.log(outputs);
    items.forEach((item) => {
      if (outputs.hasOwnProperty(item[field])) {
        outputs[item[field]].values.push(item);
      } else {
        outputs[item[field]] = { nom: item[field], values: [item] };
      }
    });
    return Object.values(outputs);
    
  };

  const textesLegaux = groupObjectByField(textes, "nom");

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
          TEXTES LÉGAUX ÉLECTORAUX
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {textesLegaux &&
          textesLegaux
            .filter((value) =>
              input
                ? value.nom.toLowerCase().includes(input.toLowerCase())
                : true
            )
            .map((text) => (
            <Grid item xs={12} sm={6} lg={3} key={text.id} >
              <h5>Textes Légaux</h5>
            <TransparentBlogCard 
              image={justice}
              title={text.nom}
              // description={info.contenu.slice(0, 100)}
              action={{
                type: "internal",
                route: "#", 
                color: "info",
                // label: "Lire",
              }}
            />
          </Grid>
          ))
          }
          
          {/* <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Flexible work hours"
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                label: "read more",
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
