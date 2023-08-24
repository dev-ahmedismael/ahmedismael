import { Typography } from "@mui/material";
import React from "react";
import SOS from "./SOS";

const SectionTitle = ({ children }) => {
  return (
    <SOS>
      <Typography variant="h3" color="primary" mb={10}>
        {children}
      </Typography>
    </SOS>
  );
};

export default SectionTitle;
