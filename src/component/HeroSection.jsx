import { Typography, Box } from "@mui/material";
import React from "react";
import Tancoin from "../assets/Tanimage/Tancoin.png";

export const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          placeItems: "center",
          paddingTop: "200px",
          paddingBottom: "120px",
          background: "linear-gradient(to bottom, #3f1326 5%, #000000 100%)",
          // /background: "linear-gradient(to bottom, #CA386F 5%, #000000 100%)",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: "35px",
                sm: "52px",
              },
              fontFamily: "Roboto",
              textAlign: "center",
              color: "white",
            }}
          >
            Welcome to TAN
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
              wordBreak: "break-word",
              fontSize: {
                xs: "20px",
                sm: "25px",
              },
              fontWeight: 500,
              lineHeight: { xs: "30px", sm: "35px" },
              marginTop: "10px",
              fontFamily: "Roboto",
              color: "white",
            }}
          >
            The leading platform for innovative apps and blockchain network
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: " #000000",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            background: "linear-gradient(to bottom, #DC4D8B, #E0736A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            maxWidth: "800px",
            fontWeight: 600,
            fontFamily: "Roboto",
            fontSize: {
              xs: "25px",
              sm: "35px",
              md: "40px",
            },
            textAlign: "center",
            wordBreak: "break-word",
            lineHeight: {
              xs: "35px",
              sm: "50px",
            },
            marginBottom: "30px",
            px: "20px",
          }}
        >
          Introducing the most liquid, scarce, and valuable token
        </Typography>
        <Box
          component="img"
          src={Tancoin}
          sx={{
            width: {
              xs: "45%",
              sm: "25%",
            },
            height: {
              xs: "45%",
              sm: "25%",
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              fontSize: "24px",
              fontFamily: "Roboto",
              background: "linear-gradient(180deg, #DC4D8B 0%, #E0736A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TAN TOKEN
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontFamily: "Roboto",
              fontWeight: 700,
              maxWidth: "478px",
              color: "white",
            }}
          >
            $TAN is the native utility token of Tarality and serves as the
            lifeblood of the ecosystem.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
