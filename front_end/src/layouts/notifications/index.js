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

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// react-router-dom components
// import { Link } from "react-router-dom";

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
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Add a Ward
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="number" label="Ward Number" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Number of Shifts" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Type" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="number" label="Minimum Number of Nurses" fullWidth />
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                Cancle
              </MDButton>
              <MDButton variant="gradient" color="info" fullWidth>
                Save
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
