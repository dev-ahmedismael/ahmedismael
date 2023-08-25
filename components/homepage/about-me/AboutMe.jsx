"use client";
import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { blue, grey, pink, red } from "@mui/material/colors";

const AboutMe = () => {
  const socialMediaIcons = [
    {
      id: 1,
      icon: <TwitterIcon fontSize="large" />,
      url: "https://twitter.com/devahmedismael",
      color: blue[500],
    },
    {
      id: 2,
      icon: <InstagramIcon fontSize="large" />,
      url: "https://www.instagram.com/devahmedismael",
      color: pink[500],
    },
    {
      id: 3,
      icon: <LinkedInIcon fontSize="large" />,
      url: "https://www.linkedin.com/in/devahmedismael",
      color: blue[900],
    },
    {
      id: 3,
      icon: <YouTubeIcon fontSize="large" />,
      url: "https://www.youtube.com/@devahmedismael",
      color: red[700],
    },
    {
      id: 3,
      icon: <GitHubIcon fontSize="large" />,
      url: "https://www.github.com/dev-ahmedismael",
      color: grey[900],
    },
  ];
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
      <Box display={"flex"} justifyContent={"center"} mb={5}>
        {socialMediaIcons.map((e) => (
          <Box key={e.id} mr={2} color={e.color}>
            <Link href={e.url} target="_blank">
              {e.icon}
            </Link>
          </Box>
        ))}
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
