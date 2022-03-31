/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

export default function data() {
  const Author = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "ward number", accessor: "author", width: "45%", align: "left" },
      { Header: "number of beds", accessor: "function", align: "left" },
      { Header: "type", accessor: "status", align: "center" },
      { Header: "min number of nurses", accessor: "employed", align: "center" },
    ],

    rows: [
      {
        author: <Author email="1" />,
        function: <Job description="5" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="General" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text">
            5
          </MDTypography>
        ),
      },

      {
        author: <Author email="2" />,
        function: <Job description="8" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Emergency Room" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text">
            5
          </MDTypography>
        ),
      },

      {
        author: <Author email="3" />,
        function: <Job description="7" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="OB/GYN" color="info" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text">
            4
          </MDTypography>
        ),
      },

      {
        author: <Author email="1" />,
        function: <Job description="5" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Emergency Room" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text">
            5
          </MDTypography>
        ),
      },

      {
        author: <Author email="1" />,
        function: <Job description="5" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="General" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text">
            5
          </MDTypography>
        ),
      },
    ],
  };
}
