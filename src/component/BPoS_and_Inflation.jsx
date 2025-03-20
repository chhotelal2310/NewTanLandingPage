import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LogoImageTan from "../assets/Tanimage/LogoImageTan.png";

export const BPoS_and_Inflation = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        paddingX: {
          xs: 2,
          sm: 7,
          md: 8,
          lg: 18,
        },
        backgroundColor: "black",
      }}
    >
      <Grid
        container
        spacing={{ xs: 8, md: 2 }}
      >
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={2}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                maxWidth: "719px",
                fontFamily: "Young Serif",
                fontSize: "40",
                fontWeight: 400,
              }}
            >
              World’s first BPoS blockchain with an inflation protection model
            </Typography>
            <Typography
              sx={{
                color: "white",
                maxWidth: "719px",
                fontWeight: 400,
                fontFamily: "Roboto",
              }}
            >
              TAN is a BPoS blockchain with a halving and burn mechanism
              enabling a stable and valuable token economy and ensuring fair,
              equitable validator rewards.
            </Typography>
            <Typography
              sx={{
                color: "white",
                maxWidth: "719px",
                paddingTop: "30px",
              }}
            >
              Testnet is coming soon!
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "20px",
                paddingTop: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    border: "2px solid white",
                    zIndex: 1,
                    padding:{
                      xs:'5px 12px',
                      sm:'5px 20px'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontFamily: "Roboto",
                      fontWeight: 600,
                      color:'white'
                    }}
                  >
                    Explore Architecture
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "14px",
                      fontFamily: "Roboto",
                      fontWeight: 400,
                      color:'#D925A5'
                    }}
                  >
                    Coming Soon!
                  </Typography>
                </Button>
                <ArrowCircleRightIcon
                  sx={{
                    zIndex: 2,
                    marginLeft: "-13px",
                     color:'white'
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    border: "2px solid white",
                    zIndex: 1,
                    padding:{
                      xs:'5px 12px',
                      sm:'5px 20px'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontFamily: "Roboto",
                      fontWeight: 600,
                      color:'white'
                    }}
                  >
                    Build dApps
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "14px",
                      fontFamily: "Roboto",
                      fontWeight: 400,
                      color:'#D925A5'
                    }}
                  >
                    Coming Soon!
                  </Typography>
                </Button>
                <ArrowCircleRightIcon
                  sx={{
                    zIndex: 2,
                    marginLeft: "-13px",
                    color:'white'
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            src={LogoImageTan}
            alt="Blockchain Logo"
            sx={{
              width: { xs: "50%", sm:'40%',  md: "70%", lg:'65%' },
              maxWidth: "450px",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
