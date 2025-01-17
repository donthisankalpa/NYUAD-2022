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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import MDButton from "components/MDButton";
// import { useState } from "react";

function Tables() {
  const { columns, rows } = authorsTableData();
  // const [frequency, setFrequency] = useState("weekly");
  // setFrequency(0);
  function generateSchedule() {
    //   fetch(`http://example.com/?frequency=${frequency}`)
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={4}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h4" color="white">
                  Your Wards
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Grid item>
        <Link to="/addWard">
          <MDButton variant="gradient" color="info">
            Add a ward
          </MDButton>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/generateSchedule">
          <MDButton variant="gradient" color="info" onClick={() => generateSchedule()}>
            Generate Schedule &gt;&gt;
          </MDButton>
        </Link>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
