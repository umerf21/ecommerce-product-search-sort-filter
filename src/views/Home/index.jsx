import { Box, Button, Checkbox, InputBase, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Filters, HomeHeader, NavBar, Products } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import { getProductList, requestProductList } from "../../redux/product";
import { requestGetCategories } from "../../redux/Home";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
     const dispatchApi = async () => {
        await  dispatch(requestProductList())
        await dispatch(requestGetCategories())
      }
      dispatchApi()
  },[])

  const productList = useSelector(getProductList);

  const [filter, setFilte] = useState({})
  
  if(productList.length === 0) {
    return <h1>LOADING...</h1>
  }

  return (
    <div className="App">
        <NavBar/>
        <HomeHeader/>
        <div style={{display:'flex', justifyContent:'space-between', margin:'50px 75px', gap:'50px'}}> 
        <Box flex={1}>
          <Filters/>
        </Box>
         <Products data={productList}/>
        </div>
    </div>
  )
}
export default Home