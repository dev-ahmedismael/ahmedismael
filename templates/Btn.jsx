import { Button } from "@mui/material";
import React from "react";

const Btn = ({ children }) => {
  return (
    <Button color="info" variant="contained" sx={{ height: 55, px: 3 }}>
      {children}
    </Button>
  );
};

export default Btn;
