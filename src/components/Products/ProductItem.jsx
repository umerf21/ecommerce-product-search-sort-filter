import { Checkbox, Typography } from "@mui/material";
import React from "react";
import { TextH5 } from "../../common/Text";
import { FaHeart,FaRegHeart } from 'react-icons/fa';

const ProductItem = ({item}) => {
  return (
    <div style={{alignItems:'center', width:'32%', minWidth:'180px'}}>
    <div style={{position:'relative', height:'500px', display:'flex', flexDirection:'column',}}> 
    <Checkbox sx={{position:'absolute', right:0, backgroundColor:'white'}}  icon={<FaRegHeart />} checkedIcon={<FaHeart />} />
      <img src={item.image}  alt="" style={{width:'100%', height:'250px', objectFit:'contain'}} />

      <Typography>{item.category}</Typography>
      <TextH5 sx={{
        margin:'10px 0px',
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,}}>{item.title}</TextH5>
      <Typography sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        fontSize:'14px'
        }}>{item.description}</Typography>
      <TextH5 sx={{color:'red',margin:'10px 0px',justifySelf:'flex-end'}}>${item.price}</TextH5>
    </div>
    </div>
  )
}
export default ProductItem