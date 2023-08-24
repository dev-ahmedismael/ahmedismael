import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { GrSkype } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
const Resume = () => {
  const details = [
    {
      id: 1,
      title: "Personal Info",
      content: [
        "Name: Ahmed Mohamed Ismael",
        "Nationality: Egyptian",
        "Residence: Cairo, Egypt",
        "Education: Bachelor's degree in Tourism & Hotels from Mansoura University",
      ],
    },
    {
      id: 2,
      title: "Courses",
      content: [
        "Frontend Web Development from Meta",
        "Backend Web Development from Meta",
      ],
    },
    {
      id: 3,
      title: "Spoken Languages",
      content: [
        "C++, HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React, Material UI, Redux Toolkit, Next JS, MySQL, PHP, Laravel.",
      ],
    },
    {
      id: 4,
      title: "Work Experience",
      content: [
        "2022 - Present: Freelancer Frontend Web Developer at Upwork.",
        "2023 - Present: Remote Frontend Web Developer at HMS Development.",
      ],
    },
    {
      id: 5,
      title: "Contact Details",
      content: [
        "Phone: 0020502522516",
        "Cell: 00201286523946",
        "Email: dev.ahmedismael@outlook.com",
      ],
    },
  ];
  return (
    <Section>
      <Box display={"flex"} justifyContent={"center"}>
        <SectionTitle>About Me</SectionTitle>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={4}>
          <Box className={"bg-white"} borderRadius={2} py={3}>
            <Box display={"flex"} justifyContent={"center"} mb={3}>
              <img
                src="/images/ahmedismael.jpg"
                alt="Ahmed Ismael"
                width={150}
                height={150}
                style={{ borderRadius: "100%", border: "5px solid #fff" }}
              />
            </Box>
            <Typography variant="h5" color={"primary"} textAlign={"center"}>
              Ahmed Ismael
            </Typography>
            <Typography fontSize={"small"} textAlign={"center"}>
              @devahmedismael
            </Typography>
            <Typography variant="h6" textAlign={"center"} mb={2}>
              Frontend Web Developer
            </Typography>
            <Box mb={1} display={"flex"} justifyContent={"center"}>
              <Link
                href="https://www.credly.com/badges/cb737357-e7de-4d01-8ef9-938165a9dad0/public_url"
                target="_blank"
              >
                <Image
                  src={
                    "/images/certificates/meta-full-stack-engineer-certificate.png"
                  }
                  alt="Ahmed Ismael's Certificate from Meta as a Full-Stack Software Engineer"
                  width={100}
                  height={100}
                />
              </Link>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Box mr={2}>
                <Link href={"tel:00201286523946"} target="_blank">
                  <FaPhoneAlt color="#15a8d4" fontSize={"x-large"} />
                </Link>
              </Box>
              <Box mr={2}>
                <Link
                  href={"mailto:dev.ahmedismael@outlook.com"}
                  target="_blank"
                >
                  <GrMail color="#15a8d4" fontSize={"x-large"} />
                </Link>
              </Box>
              <Box mr={2}>
                <Link
                  href={"skype:live:.cid.fd69434a53a31b5e?chat"}
                  target="_blank"
                >
                  <GrSkype color="#15a8d4" fontSize={"x-large"} />
                </Link>
              </Box>
              <Box>
                <Link
                  href={"https://github.com/dev-ahmedismael"}
                  target="_blank"
                >
                  <GrGithub color="#15a8d4" fontSize={"x-large"} />
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          {details.map((e) => (
            <Box
              key={e.id}
              className={"bg-white"}
              borderRadius={2}
              py={3}
              mb={5}
            >
              <Container>
                <Typography variant="h5" color={"primary"} mb={2}>
                  {e.title}
                </Typography>
                {e.content.map((e, index) => (
                  <Typography key={index} mb={1}>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
};

export default Resume;
