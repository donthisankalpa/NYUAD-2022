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
      { Header: "name", accessor: "author", width: "45%", align: "left" },
      { Header: "speciality", accessor: "function", align: "left" },
      { Header: "preferred shift", accessor: "status", align: "center" },
    ],

    rows: [
      {
        author: <Author email="Reem Ashraf" />,
        function: <Job description="General" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Morning" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        author: <Author email="Ahmed Mohammed" />,
        function: <Job description="OB/GYN" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Noon" color="info" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        author: <Author email="Noor Mustafa" />,
        function: <Job description="General" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Night" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        author: <Author email="Sana Faysal" />,
        function: <Job description="General" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Night" color="secondary" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}
