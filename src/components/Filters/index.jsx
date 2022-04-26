import { Box, Button, styled, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { getCategories } from "../../redux/Home"
import CategoryFilter from "./CategoryFilter"
import ColorsFilter from "./ColorsFilter"
import Price from "./Price"
import {IoIosArrowForward} from 'react-icons/io'

const Filters = () => {
  
  const categories = useSelector(getCategories)
console.log("CAtegories", categories);

  const BannerText = styled(Typography)(()=>({
      fontFamily:'Merriweather',
        color:'white',
        fontWeight:'400',
        margin:'10px 0px',
        textAlign:'left'
  }))

  const advertisingBanner = () =>(
    <div style={{
      height:'400px',  
      justifyContent:'flex-end',
      backgroundColor:'#F86338', }}>
      <div style={{ margin:'20px', display:'flex', flexDirection:'column'}}>
      <BannerText variant="h4" sx={{fontWeight:'600',}}>March Discount</BannerText>
      <BannerText variant="h6" >Upto 70% Off for All items in March</BannerText>
      <Button variant="contained" endIcon={<IoIosArrowForward/>} 
      sx={{backgroundColor:'white', color:'#F86338', padding:'10px 20px', marginTop:'10px'}}
      >Got it</Button>
      </div>
    </div>
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