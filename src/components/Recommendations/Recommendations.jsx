import { Typography } from "@mui/material";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TextH5 } from "../../common/Text";
import { getProductList } from "../../redux/product";
import './styles.css'

const Recommendations = () => {

    const data = useSelector(getProductList)
    const [recommended, setRecommended] = useState([])

    function recommendedItemsSort(){
        if(!isEmpty(data)){
            let temp = [...data]
            temp.sort((a,b)=>a.rating.rate - b.rating.rate)
            setRecommended(temp.slice(0,8))
        }
    }

    useEffect(()=>{
        recommendedItemsSort()
    },[data])

  return (
    <div className="r-container">
        <Typography variant="h3" sx={{fontFamily:'Merriweather', margin:'25px 0px'}}
        color='secondary'>Recommended for You</Typography>
        <div className="wrapper">
            {recommended?.map((item)=>(
                <div className="item">
                    <img src={item.image} alt="" className="item-image" />
                    <TextH5 sx={{
                        margin:'10px 0px',
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,}} >{item.title}</TextH5>
                   <Typography sx={{color:'#F86338'}}>${item.price}</Typography>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Recommendations