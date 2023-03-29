import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import Breadcrumbs from "../../../../examples/Breadcrumbs";

function BreadcrumbsEL() {
  return (
    <MKBox component="section" bgColor="transparent" py={8}>
      <Container>
        <Grid container spacing={2} item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <Breadcrumbs
              routes={[
                { label: "Accueil", route: "/presentation" },
                { label: "Candidat" },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BreadcrumbsEL;
