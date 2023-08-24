"use client";
import Section from "@/templates/Section";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { projects } from "@/public/data/projects.json";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
register();

const FeaturedProjects = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
      autoplay: true,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        100: { slidesPerView: 1 },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <Section>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"fit-content"}
      >
        <Typography variant="h3" color={"primary"}>
          Featured Projects
        </Typography>
        <Link href={"/portfolio"}>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            className="heading"
            ml={3}
            sx={{ textDecoration: "underline" }}
          >
            VIEW ALL PROJECTS
          </Typography>
        </Link>
      </Box>
      <Box>
        <Box display={"flex"} justifyContent={"flex-end"} mb={3}>
          <Button
            variant="outlined"
            sx={{ borderRadius: "100%", width: 50, height: 60 }}
            className="prev-btn"
          >
            <ArrowBackIcon />
          </Button>
          <Button
            variant="outlined"
            sx={{ borderRadius: "100%", width: 50, height: 60, ml: 2 }}
            className="next-btn"
          >
            <ArrowForwardIcon />
          </Button>
        </Box>
        <swiper-container ref={swiperRef} init="false">
          {projects.map((project, index) => (
            <swiper-slide key={index}>
              <Box>
                <Link href={`/portfolio/${project.id}`}>
                  <img
                    src={project.img}
                    alt={project.title}
                    width={"100%"}
                    height={300}
                    style={{ borderRadius: "10px" }}
                  />
                </Link>
                <Typography variant="h5" color={"primary"} textAlign={"center"}>
                  {project.title}
                </Typography>
                <Typography variant="h6" textAlign={"center"}>
                  {project.description}
                </Typography>
              </Box>
            </swiper-slide>
          ))}
        </swiper-container>
      </Box>
    </Section>
  );
};

export default FeaturedProjects;
