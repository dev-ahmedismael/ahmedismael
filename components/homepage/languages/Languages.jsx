"use client";
import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { SiCplusplus } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { Box, Container } from "@mui/material";
import {
  blue,
  deepPurple,
  grey,
  indigo,
  lightBlue,
  orange,
  purple,
  red,
  yellow,
} from "@mui/material/colors";

register();

const Languages = () => {
  const langs = [
    { id: 1, icon: <SiCplusplus />, color: blue[900] },
    { id: 2, icon: <SiHtml5 />, color: orange[700] },
    { id: 3, icon: <SiCss3 />, color: indigo[800] },
    { id: 4, icon: <SiBootstrap />, color: purple[700] },
    { id: 5, icon: <SiTailwindcss />, color: blue[500] },
    { id: 6, icon: <SiJavascript />, color: yellow[500] },
    { id: 7, icon: <SiReact />, color: lightBlue[600] },
    { id: 8, icon: <SiNextdotjs />, color: grey[900] },
    { id: 9, icon: <SiRedux />, color: deepPurple[800] },
    { id: 10, icon: <SiMui />, color: lightBlue[600] },
    { id: 11, icon: <SiMysql />, color: orange[400] },
    { id: 12, icon: <SiPhp />, color: indigo[400] },
    { id: 13, icon: <SiLaravel />, color: red[700] },
  ];

  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      autoplay: true,
      loop: true,
      slidesPerView: 6,
      spaceBetween: 30,
      breakpoints: {
        100: { slidesPerView: 3 },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 6,
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <section>
      <Container>
        <Box
          border={"1px solid #fff"}
          borderRadius={2}
          mt={1}
          pt={2}
          mb={5}
          className="bg-white"
        >
          <Container>
            <swiper-container ref={swiperRef} init="false">
              {langs.map((lang) => (
                <swiper-slide key={lang.id}>
                  <Box color={lang.color} fontSize={"80px"} mr={5}>
                    {lang.icon}
                  </Box>
                </swiper-slide>
              ))}
            </swiper-container>
          </Container>
        </Box>
      </Container>
    </section>
  );
};

export default Languages;
