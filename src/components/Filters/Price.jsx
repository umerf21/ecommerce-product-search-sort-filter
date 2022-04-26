import { Box, Slider, Typography } from "@mui/material";
import React from "react";
import { TextH5 } from "../../common/Text";
import './styles.css'

const Price = () => {
    const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="container">
        <TextH5>Price</TextH5>
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            size="small"
            color="secondary"
            sx={{color:'#E0E0E0'}}
      />
      <Box sx={{display:'flex',width:'100%', justifyContent:'space-between', margin:'10px 0px'}}>
          <Typography>Range</Typography>
          <Typography>{`$${value[0]}-$${value[1]}`}</Typography>
      </Box>
    </Box>
  )
}
export default Price