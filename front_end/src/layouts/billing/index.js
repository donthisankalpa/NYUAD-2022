/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
// import MuiLink from "@mui/material/Link";

// // @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components

// Images
function Billing() {
  function submitPost(e) {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const speciality = e.currentTarget.speciality.value;
    const preferredTime = e.currentTarget.preferredTime.value;

    console.log(name, speciality, preferredTime);
    // const url = `${baseUrl}create?wardNumber=${wardNumber}&noOfShifts=${noOfShifts}&types=${types}&minimumNoNurses=${minimumNoNurses}`;
    // axios
    //   .get(url)
    //   .then(function (response) {
    //     console.log({ response });
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  }
  return (
    <DashboardLayout>
      <DashboardNavbar isMini />
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={0}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Add a Nurse
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" name="form" role="form" onSubmit={(e) => submitPost(e)}>
            <MDBox mb={2}>
              <MDInput type="text" label="Name" name="name" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Speciality" name="speciality" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="time" label="Preferred Time" name="preferredTime" fullWidth />
            </MDBox>

            <Grid item textAlign="center">
              <Link to="/nurses">
                <MDButton variant="gradient" color="error" type="reset">
                  Cancle
                </MDButton>
              </Link>
              &nbsp;&nbsp;&nbsp;
              {/* <Link to="/nurses"> */}
              <MDButton variant="gradient" color="info" type="submit" form="form">
                Save &gt;&gt;
              </MDButton>
              {/* </Link> */}
            </Grid>
          </MDBox>
        </MDBox>
      </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
