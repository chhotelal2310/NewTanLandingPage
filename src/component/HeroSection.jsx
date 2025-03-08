import { Typography, Box } from "@mui/material";
import React from "react";

export const HeroSection = () => {
  return (
    <Box sx={{
        placeItems:'center',
        paddingTop:'200px',
        paddingBottom:'200px'
    }}>
      <Box
        sx={{
          maxWidth: "600px",
          paddingLeft:'10px',
          paddingRight:'10px'
        }}
      >
        <Typography variant="h3" sx={{
            fontWeight:800,
            fontFamily:'Roboto',
            textAlign:'center',

        }}>Welcome to TAN</Typography>
        <Typography variant="subtitle1" sx={{
            textAlign:'center',
            wordBreak:'break-word',
            fontSize:'25px',
            fontWeight:600,
            lineHeight:'35px',
            marginTop:'10px',
            fontFamily:'Roboto'

        }}>
          The leading platform for innovative apps and blockchain network
        </Typography>
      </Box>
    </Box>
  );
};
