import Section from "@/templates/Section";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { projects } from "@/public/data/projects.json";
import Link from "next/link";
import AOS from "@/templates/AOS";

const Portfolio = () => {
  return (
    <Section>
      <Box display={"flex"} justifyContent={"center"}>
        <SectionTitle>My Portfolio</SectionTitle>
      </Box>
      <Grid container spacing={5}>
        {projects.map((project) => (
          <Grid key={project.id} item xs={12} sm={4}>
            <AOS>
              <Link href={`/portfolio/${project.id}`}>
                <Box height={250} borderRadius={2} overflow={"hidden"}>
                  <img
                    src={project.img}
                    alt={project.title}
                    width={"100%"}
                    height={250}
                    className="project-img"
                    style={{
                      borderRadius: "7px",
                    }}
                  />
                </Box>
              </Link>
              <Typography
                variant="h5"
                mt={2}
                color={"primary"}
                textAlign={"center"}
              >
                {project.title}
              </Typography>
              <Typography variant="h6" textAlign={"center"}>
                {project.description}
              </Typography>
            </AOS>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Portfolio;
