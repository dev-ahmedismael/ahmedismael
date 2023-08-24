import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <header>
      <Container>
        <Box
          border={"1px solid #fff"}
          borderRadius={2}
          mt={1}
          mb={5}
          py={10}
          className="bg-white"
        >
          <Container>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <img src="/images/wave.png" alt="Hello" />
                  <Typography variant="h5" ml={2}>
                    Hello!
                  </Typography>
                </Box>
                <Typography variant="h3" textAlign={"center"}>
                  I'm Ahmed Ismael
                </Typography>
                <Typography
                  variant="h3"
                  textAlign={"center"}
                  fontWeight={"bold"}
                  color={"primary"}
                >
                  Frontend Web Developer
                </Typography>
                <Typography textAlign={"center"}>
                  Have experience in web designing and development building{" "}
                  <br /> high quality & responsive website using React & Next JS
                  and I've <br /> a good knowlege in back-end development using
                  PHP & Laravel
                </Typography>
              </Box>
              <Box display={{ xs: "none", sm: "none", md: "block" }}>
                <img
                  src="/images/logo.png"
                  alt="Ahmed Ismael Logo"
                  width={330}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
