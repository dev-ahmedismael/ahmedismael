import { Box, Container } from "@mui/material";
import React from "react";
import AOS from "./AOS";

const Section = ({ children }) => {
  return (
    <AOS>
      <section>
        <Container>
          <Box
            border={"1px solid #fff"}
            borderRadius={2}
            mt={1}
            mb={5}
            py={10}
            className="bg-white"
          >
            <Container>{children}</Container>
          </Box>
        </Container>
      </section>
    </AOS>
  );
};

export default Section;
