import { Typography, Box } from "@mui/material";
import React from "react";

export const HeroSection = () => {
  return (
    <Box sx={{
        placeItems:'center',
        paddingTop:'250px',
        paddingBottom:'200px',
        background: "linear-gradient(to bottom, #3f1326 5%, #000000 100%)",
        width:'100%',
        height:'100vh'
      
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
            fontSize:{
              xs:'35px',
            },
            fontFamily:'Roboto',
            textAlign:'center',
            color:'white'

        }}>Welcome to TAN</Typography>
        <Typography variant="subtitle1" sx={{
            textAlign:'center',
            wordBreak:'break-word',
            fontSize:{
              xs:'20px',
              sm:'25px'
            },
            fontWeight:600,
            lineHeight:{xs:'30px',sm:'35px'},
            marginTop:'10px',
            fontFamily:'Roboto',
            color:'white',
            background: "linear-gradient(to bottom, #DC4D8B, #E0736A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

        }}>
          The leading platform for innovative apps and blockchain network
        </Typography>
      </Box>
    </Box>
  );
};
