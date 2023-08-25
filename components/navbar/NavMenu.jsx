"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { blue } from "@mui/material/colors";

const NavMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const pages = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "ABOUT", url: "/about" },
    { id: 3, title: "SERVICES", url: "/services" },
    { id: 4, title: "BLOG", url: "/blog" },
    { id: 5, title: "CONTACT", url: "/contact" },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      height={"100%"}
      onClick={() => setIsMenuActive(!isMenuActive)}
    >
      <Button>
        <MenuIcon sx={{ color: "#716e79" }} />
      </Button>

      <Box position={"absolute"} zIndex={10} top={133} left={0} width={"100%"}>
        <Container>
          <Box
            className={isMenuActive ? "open-navmenu" : " close-navmenu"}
            mx={1}
            borderRadius={2}
            overflow={"hidden"}
            bgcolor={"#fff"}
          >
            {pages.map((page) => (
              <Box key={page.id} my={4}>
                <Container>
                  <Link href={page.url}>
                    <Typography
                      textAlign={"center"}
                      sx={{ "&:hover": { color: blue[700] } }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </Container>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NavMenu;
