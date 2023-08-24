import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <Section>
      <Box display={"flex"} justifyContent={"center"}>
        <SectionTitle>About Me</SectionTitle>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mb={5}>
        <img
          src="/images/ahmedismael.jpg"
          alt="Ahmed Ismael"
          width={150}
          height={150}
          style={{ borderRadius: "100%", border: "5px solid #fff" }}
        />
      </Box>
      <Typography textAlign={"center"}>
        My name is Ahmed Ismael, I'm a Frontend Web Developer from Egypt <br />
        I've experience in web designing and development building high quality &
        responsive website using React and Next JS <br />
        I've a good knowledge also in back-end development using PHP & Laravel.
      </Typography>
    </Section>
  );
};

export default AboutMe;
