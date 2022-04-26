import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import "../App.css"

const HomeHeader = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{display:'flex', alignItems:'center', 
    justifyContent:'space-between', marginLeft:!isMobile && '100px',
    flexDirection:isMobile && 'column'}}>
        <Box flex={1} sx={{alignItems:'flex-start', flexDirection:'column', display:'flex'}}>
            <Typography variant="h5" fontFamily={'Merriweather'}>{`Home > Shop`}</Typography>
            <Typography variant="h2" fontFamily={'Merriweather'} fontWeight={600}>Shop</Typography>
        </Box>
        <Box flex={3}>
            <img src="https://www.hamburg.com/image/12791868/16x9/990/557/7d62f44ef97d5552a4d1d64b98217232/eu/glore-shop-altona.jpg" alt="" style={{height:'400px', width:'100%'}} />
        </Box>
    </Box>
  )
}
export default HomeHeader