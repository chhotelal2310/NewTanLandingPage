import { Box, Typography } from "@mui/material";
import React from "react";

export const UseForTan = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        paddingTop: "60px",
      }}
    >
      <Box
        sx={{
          placeItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: "transparent",
            background: "linear-gradient(90deg, #E2488B 0%, #EF7868 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Use TAN For
        </Typography>
      </Box>
    </Box>
  );
};
