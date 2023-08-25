import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { blue } from "@mui/material/colors";
import SOS from "@/templates/SOS";

const Footer = () => {
  return (
    <SOS>
      <footer>
        <Container>
          <Box
            border={"1px solid #fff"}
            borderRadius={2}
            mt={1}
            mb={1}
            py={2}
            className="bg-white"
          >
            <Typography textAlign={"center"}>
              Copyright © 2022 - 2023
            </Typography>
            <Typography textAlign={"center"}>
              Developed With <FavoriteBorderIcon sx={{ color: blue[700] }} /> By
              Ahmed Ismael
            </Typography>
          </Box>
        </Container>
      </footer>
    </SOS>
  );
};

export default Footer;
