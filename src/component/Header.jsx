import React from "react";
import {
  Avatar,
  Box,
  Button,
  Link,
  Typography,
  ToggleButton,
} from "@mui/material";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import logo from "../assets/Tanglogo/logo.png";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding:{
            xs:'18px 10px 18px 10px',
            sm: "18px 40px 18px 40px",

          },
          alignItems: "center",
          backgroundColor: "#000000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            variant="square"
            sx={{
              backgroundColor: "#000000",
              height:'100%'
            }}
          >
            <img src={logo} style={{
              width:'80%',
              height:'80%'
            }} />
          </Avatar>
          <Typography
            variant="h4"
            sx={{
              color: "#ffffff",
              fontWeight:500,
              fontFamily:'Noto Serif Thai'
            }}
          >
            TAN
          </Typography>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            alignItems: "center",
            columnGap: {
              sm: "40px",
              md: "60px",
            },
           
          }}
        >
          <Link
            component="button"
            variant="subtitle1"
            underline="none"
            sx={{
              color: "#ffffff",
              " &:hover": {
                color: "blue",
              },
            }}
          >
            Developer Docs
          </Link>
          <Link
            component="button"
            variant="subtitle1"
            underline="none"
            sx={{
              color: "#ffffff",
              " &:hover": {
                color: "blue",
              },
            }}
          >
            Become a validator
          </Link>
          <Link
            component="button"
            variant="subtitle1"
            underline="none"
            sx={{
              color: "#ffffff",
              " &:hover": {
                color: "blue",
              },
            }}
          >
            ICO
          </Link>
        </Box>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            borderRadius: "50px",
            background: "linear-gradient(180deg, #E2488B 0%, #A04C50 100%)",
            "&:hover": {
              background: "linear-gradient(180deg, #D83779 0%, #8B3F42 100%)",
            },
            display:{
              xs:'none',
              md:'block'
            },
            fontFamily:'Roboto'
          }}
          disableElevation
        >
          Join the community
        </Button>
        <ToggleButton value="justify" key="justify" sx={{
          display:{
            md:'none',
          }, 
         padding:'0px'
          

          
        }}>
          <FormatAlignJustifyIcon sx={{
            color:'white',
            fontSize:{
              xs:30,
              sm:35
            }
          }} />
        </ToggleButton>
        
      </Box>
    </>
  );
};
