import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import './styles.css'
import { Box, Button, Checkbox, InputBase, Menu, MenuItem, Pagination, Typography } from "@mui/material"
import {FiSearch} from 'react-icons/fi'
import {FaList, } from 'react-icons/fa';
import {FiGrid} from 'react-icons/fi'
import {IoIosArrowDown} from 'react-icons/io'
import _, { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { getFilters } from "../../redux/Home";

const Products = ({data}) => {

  
//   if(data.length === 0){
//    return <h1>Loading</h1>
//  }

  const POST_PER_PAGE = 9;
   const [allProducts, setAllProducts] = useState(data);
   const [currentProducts, setCurrentProducts] = useState(data.slice(0,POST_PER_PAGE))
   const [page,setPage] = useState(1)
   const [search, setSearch] = useState('')

   function updateProducts(products){
    const lastIndex = page * POST_PER_PAGE;
    const firstIndex = lastIndex - POST_PER_PAGE;
    const current = products.slice(firstIndex, lastIndex)
    setCurrentProducts(current)
   }

   useEffect( () => {
    updateProducts(allProducts)
   },[page])

   //Search
   useEffect(()=>{
     if(search === ''){
       setAllProducts(data)
       updateProducts(data)
      }
      else {
        setPage(1)
       let tempData = [...allProducts]
       const current = tempData.filter(item=>
        item.title.toLowerCase().includes(search.toLowerCase()))

       if(current.length !== 0){
        setAllProducts(current);  
        updateProducts(current)
      } else {
        setAllProducts([])
       updateProducts([])
      }
     }
   },[search])
   
   const Search = () => ( 
        <div className="searchContainer">
            <InputBase placeholder="Search Products" style={{flex:1}} 
            onChange={(event)=>{setSearch(event.target.value)}}/>
            <FiSearch/>
          </div>
   )


   //Sort
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [sortby, setSortby] = useState('Newest')
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    if(event.target.textContent !== '') {
    let temp = [];
    setSortby(event.target.textContent)
    switch (event.target.textContent) {
      case "Newest":
        temp = currentProducts.sort((a,b) => a.id - b.id)
        setCurrentProducts(temp);
        break;
      case "Oldest":
        temp = currentProducts.sort((a,b) => b.id - a.id)
        setCurrentProducts(temp);
        break;
      case "Price High":
        temp = currentProducts.sort((a,b) => b.price - a.price)
        setCurrentProducts(temp);
        break;
      case "Price Low":
        temp = currentProducts.sort((a,b) => a.price - b.price)
        setCurrentProducts(temp);
        break;
    
      default:
        break;
    }
  }

  };

   const Sort = () => (
    <div className="sortContainer">
        <Typography variant="p">Showing 1-9 Results</Typography>
        <div style={{alignItems:'center', display:'flex', gap:'20px'}}>
          <span>Sort by</span>

          <Button variant="outlined" onClick={handleClick} endIcon={<IoIosArrowDown/>}>{sortby}</Button>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Newest</MenuItem>
        <MenuItem onClick={handleClose}>Oldest</MenuItem>
        <MenuItem onClick={handleClose}>Price High</MenuItem>
        <MenuItem onClick={handleClose}>Price Low</MenuItem>
      </Menu>

          <FaList size={20}/>
          <FiGrid size={20}/>
        </div>
      </div>
   )

   const filter = useSelector(getFilters)

  //Filter
  const [filters, setFilters] = useState(filter)
  useEffect(()=>{
    console.log(filter);
    if(!isEmpty(filter)){
      let temp = [];
  
      // categories Filter
      temp = data.filter((item)=> item.category === filter.category)
      setCurrentProducts(temp)
      setAllProducts(temp)
    }
  },[filter])

  return (
    <Box flex={3}  >
    {Search()}
    {Sort()}
    <div className="productContainer">
        {currentProducts?.map((p)=>(
            <ProductItem item={p}/>
        ))}
    </div>
    <Pagination 
    page={page}
    count={Math.ceil(allProducts.length/POST_PER_PAGE)}
    color="primary" 
    onChange={(e,value)=> setPage(value)} />

    </Box>
  )
}
export default Products