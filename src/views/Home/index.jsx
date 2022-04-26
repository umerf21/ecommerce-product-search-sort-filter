import { Box, Button, Checkbox, InputBase, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Filters, Footer, HomeHeader, NavBar, Products, Recommendations } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import { getProductList, requestProductList } from "../../redux/product";
import { getCategories, getFilters, requestGetCategories } from "../../redux/Home";
import { isEmpty } from "lodash";

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
  const categories = useSelector(getCategories)
  
  // const [filter, setFilte] = useState({})
  
  if(productList.length === 0 && isEmpty(categories)) {
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
         <Products data={productList} />
        </div>
        <Recommendations/>
        <Footer/>
    </div>
  )
}
export default Home