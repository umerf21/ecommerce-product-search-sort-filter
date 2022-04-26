import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { TextH5 } from "../../common/Text";
import {IoIosArrowForward} from 'react-icons/io'
import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/Home";

const CategoryFilter = ({data}) => {

    const [select, setSelect] = useState('');
    const dispatch = useDispatch()
    // dispatch(updateFilter({category : select}))

    function handleSelect(e){
        dispatch(updateFilter({category : e.target.textContent}))
    }

return (
    <Box className="container">
    <TextH5 sx={{marginBottom:'5px'}}>Categories</TextH5>
    <List sx={{width:"100%", padding:'0px'}}>
        {data?.map((item)=>(
            <ListItem sx={{
                justifyContent:'space-between', 
                padding:'3px 0px',
                cursor:'pointer',
            }}
            primaryText={item}
                title={item}
                onClick={handleSelect}
                >
                <ListItemText >{item}</ListItemText>
                <ListItemIcon sx={{justifyContent:'flex-end', }}><IoIosArrowForward/></ListItemIcon>
            </ListItem>
        ))}
    </List>
    </Box>
  )
}
export default CategoryFilter