import { Box, styled } from "@mui/material";
import React from "react";
import { TextH5 } from "../../common/Text";
import './styles.css'

const ColorsFilter = () => {

    const ColorBox = styled(Box)(()=>({
        width:'45px',
        height:'45px',
        borderRadius:'25px',
        cursor:'pointer',
       
        '&:hover':{
            outline: '4px solid white',
            outlineOffset: '-3px',
            // boxShadow:' 0 0 5px rgba(33, 33, 33, 0.1)'
        }
        
    }))

    const color = ['DarkSlateGray', 'LightCoral', 'teal', 'Gold', 'Silver', 'Coral','LightSeaGreen','FireBrick'] 

  return (
    <Box className="container">
        <TextH5>Color</TextH5>
        <Box className="color-container">
        {color.map((c)=>(
            <ColorBox sx={{backgroundColor:c}}/>
        ))}
        </Box>
    </Box>
  )
}
export default ColorsFilter