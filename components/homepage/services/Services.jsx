import Section from "@/templates/Section";
import React from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import { Box, Container, Grid, Typography } from "@mui/material";
import { blue, orange, purple, red } from "@mui/material/colors";
import SectionTitle from "@/templates/SectionTitle";

const Services = () => {
  const myServices = [
    {
      id: 1,
      title: "SEO Optimization",
      description:
        "Keep in the top of search engines results and reach more through effective search engine optimization.",
      icon: <ManageSearchIcon fontSize="large" />,
      color: orange[500],
      bgcolor: orange[50],
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Bring the power to your website through creative designs and eye-catching colors to help you to impress your visitors.",
      icon: <ColorLensIcon fontSize="large" />,
      color: purple[500],
      bgcolor: purple[50],
    },
    {
      id: 3,
      title: "Frontend Development",
      description:
        "Build your website from scratch the way you want with high performance, responsive to all screens and enjoy the power of React & Next JS.",
      icon: <CodeIcon fontSize="large" />,
      color: blue[500],
      bgcolor: blue[50],
    },
    {
      id: 4,
      title: "Backend Development",
      description:
        "Build your website the way you want, whether you prefer an API backend only or a full-stack development and enjoy the power of PHP & Laravel.",
      icon: <StorageIcon fontSize="large" />,
      color: red[500],
      bgcolor: red[50],
    },
  ];
  return (
    <Section>
      <Box display={"flex"} justifyContent={"center"}>
        <SectionTitle>Services</SectionTitle>
      </Box>
      <Grid container spacing={5}>
        {myServices.map((service) => (
          <Grid item xs={12} sm={6} key={service.id}>
            <Box className={"bg-white"} borderRadius={2} py={2}>
              <Container>
                <Box
                  bgcolor={service.bgcolor}
                  px={3}
                  pt={2}
                  pb={1}
                  width={"fit-content"}
                  borderRadius={2}
                  fontSize={"large"}
                  color={service.color}
                >
                  {service.icon}
                </Box>
                <Typography variant="h5" className="heading" my={2}>
                  {service.title}
                </Typography>
                <Typography>{service.description}</Typography>
              </Container>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
