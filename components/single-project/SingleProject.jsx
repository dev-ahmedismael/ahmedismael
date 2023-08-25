"use client";
import Section from "@/templates/Section";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { redirect, usePathname } from "next/navigation";
import { projects } from "@/public/data/projects";
import SectionTitle from "@/templates/SectionTitle";
import CameraIcon from "@mui/icons-material/Camera";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SingleProject = () => {
  const path = usePathname();
  const project = projects.find((e) => `/portfolio/${e.id}` === path);
  project === undefined && redirect("/not-found");

  return (
    <Section>
      <Box display={"flex"} justifyContent={"center"}>
        <SectionTitle>{project.title}</SectionTitle>
      </Box>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={7}>
          <Typography variant="h6" mb={2}>
            Title: {project.title}
          </Typography>
          <Typography variant="h6" mb={2}>
            Description: {project.description} website
          </Typography>
          <Typography variant="h6" mb={2}>
            Type: {project.category}
          </Typography>
          <Typography variant="h6" mb={2}>
            Frameworks and used technologies: {project.techs}
          </Typography>
          <Typography variant="h6" mb={2}>
            First release date: {project.release_date}
          </Typography>
          <Typography variant="h6" mb={2}>
            Last updated on: {project.last_update}
          </Typography>
          {project.notes !== undefined && (
            <Box mb={2}>
              <Typography variant="h6" mb={2}>
                Notes:
              </Typography>
              {project.notes.map((e, index) => (
                <Typography key={index} variant="h6" mb={2}>
                  {e}
                </Typography>
              ))}
            </Box>
          )}
          <Box display={"flex"} flexWrap={"wrap"} my={4}>
            <Link href={project.github} target="_blank">
              <Button variant="outlined" sx={{ height: 50, mr: 2 }}>
                Github <GitHubIcon sx={{ ml: 2 }} />
              </Button>
            </Link>
            <Link href={project.url} target="_blank">
              <Button variant="outlined" sx={{ height: 50 }}>
                Live Demo <CameraIcon sx={{ ml: 2 }} />
              </Button>
            </Link>
          </Box>
          <Link href={"/portfolio"}>
            <Box display={"flex"} alignItems={"center"}>
              <ArrowBackIcon color="primary" />
              <Typography ml={1} variant="h6" color="primary">
                Back to Portfolio
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img
            src={project.img}
            alt={project.title}
            width={"100%"}
            height={300}
            style={{ borderRadius: "7px" }}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default SingleProject;
