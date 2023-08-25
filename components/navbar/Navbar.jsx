import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavMenu from "./NavMenu";
import { blue } from "@mui/material/colors";
import SOS from "@/templates/SOS";

const Navbar = () => {
  const pages = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "ABOUT", url: "/about" },
    { id: 3, title: "SERVICES", url: "/services" },
    { id: 4, title: "PORTFOLIO", url: "/portfolio" },
    { id: 5, title: "CONTACT", url: "/contact" },
  ];
  return (
    <SOS>
      <nav>
        <Container>
          <Box
            border={"1px solid #fff"}
            borderRadius={2}
            mt={1}
            mb={5}
            py={2}
            className="bg-white"
          >
            <Container>
              <Box display={"flex"} justifyContent={"space-between"}>
                {/* Logo */}
                <Link href={"/"}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <img
                      src={"/images/logo.png"}
                      alt="Ahmed Ismael Logo"
                      width={50}
                      height={50}
                    />
                    <Typography variant="h6" ml={2}>
                      Ahmed Ismael
                    </Typography>
                  </Box>
                </Link>
                {/* Pages */}
                <Box
                  display={{ xs: "none", sm: "none", md: "flex" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {pages.map((page) => (
                    <Box key={page.id} ml={4}>
                      <Link href={page.url}>
                        <Typography sx={{ "&:hover": { color: blue[700] } }}>
                          {page.title}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
                </Box>
                {/* Navbar Menu Button ( Small screen only ) */}
                <Box
                  display={{ xs: "flex", sm: "flex", md: "none" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <NavMenu />
                </Box>
              </Box>
            </Container>
          </Box>
        </Container>
      </nav>
    </SOS>
  );
};

export default Navbar;
