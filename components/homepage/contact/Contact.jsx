import Section from "@/templates/Section";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ContactForm from "./ContactForm";
import SectionTitle from "@/templates/SectionTitle";

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      icon: <FmdGoodIcon color={"info"} fontSize="large" />,
      title: "Location",
      info: "Cairo, Egypt",
    },
    {
      id: 2,
      icon: <CallIcon color={"info"} fontSize="large" />,
      title: "Phone",
      info: "+201286523946",
    },
    {
      id: 3,
      icon: <EmailIcon color={"info"} fontSize="large" />,
      title: "Email",
      info: "dev.ahmedismael@outlook.com",
    },
  ];

  return (
    <Section>
      <Box display={"flex"} justifyContent={"center"}>
        <SectionTitle>Contact Me</SectionTitle>
      </Box>

      <Grid container mb={7} spacing={2}>
        {contactDetails.map((e) => (
          <Grid item xs={12} sm={12} lg={4} xl={4} key={e.id}>
            <Box display={"flex"} p={1} borderRadius={2}>
              <Box>
                <Box
                  width={60}
                  height={60}
                  className="bg-white"
                  borderRadius={2}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mr={3}
                >
                  {e.icon}
                </Box>
              </Box>
              <Box overflow={"hidden"}>
                <Typography fontSize={"x-large"}>{e.title}</Typography>
                <Typography display={{ xs: "none", sm: "block" }}>
                  {e.info}
                </Typography>
                <Typography
                  fontSize={"small"}
                  display={{ xs: "block", sm: "none" }}
                >
                  {e.info}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <ContactForm />
    </Section>
  );
};

export default Contact;
