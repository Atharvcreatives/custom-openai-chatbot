//chat page
import React from "react";
import { Box } from "@mui/material";
const chat = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none" } }}></Box>
    </Box>
  );
};

export default chat;
