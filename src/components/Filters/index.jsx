import { Box, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { getCategories } from "../../redux/Home"
import CategoryFilter from "./CategoryFilter"
import ColorsFilter from "./ColorsFilter"
import Price from "./Price"

const Filters = () => {
  
  const categories = useSelector(getCategories)
console.log("CAtegories", categories);
  const advertisingBanner = () =>(
    <Box sx={{height:'400px', width:'100%', backgroundColor:'#F86338'}}>
      <Typography variant="h3">March Discount</Typography>
      <Typography variant="h5">Upto 70% Off for All items in March</Typography>
    </Box>
  )

  return (
    <Box sx={{ display:'flex', flexDirection:'column',
    gap:'40px'    
    }}>
        <Price/>
        <ColorsFilter/>
        <CategoryFilter data={categories}/>
        {advertisingBanner()}
    </Box>
  )
}
export default Filters  