import { Box, List, ListItem, ListItemButton,ListItemIcon,ListItemText, Typography } from "@mui/material";
import React from "react";
import { SocialMedia } from "../../data/AppData";
import './styles.css'
import {HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker} from 'react-icons/hi'
import { IconContext } from "react-icons";
import Logo from '../../assets/images/logo.png'



const Footer = () => {
  return (
    <div className="footer-container">
        <img src={Logo} alt="" width={200} 
            style={{
                color:'white',
                filter: 'invert(100%) sepia(0%) saturate(2%) hue-rotate(8deg) brightness(103%) contrast(101%)'}}/>
        <div className="footer-wrapper">
            <Box flex={2} sx={{flexDirection:'column', display:'flex',height:'100%', justifyContent:'space-between'}}>
            
            <Typography variant="p" sx={{width:'75%'}} >OurStudio is a digital agency UI/UX Design and Website Development located in Ohio, United States of America</Typography>
            <Typography variant="p" >Copyright Tanah Air Studio</Typography>
            </Box>
            <Box flex={1}>
                <Typography variant="p" fontWeight={600}>Our Social Media</Typography>
                <List>
                    {SocialMedia.map((item)=>(
                        <ListItem disablePadding >
                            <ListItemButton sx={{padding:'8px 0px'}} component="a" href={item.link}>
                            <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box flex={1}>
            <Typography variant="p" fontWeight={600}>Contact</Typography>
                <List >
                    <IconContext.Provider value={{ color: "white", size:20}}>
                        <ListItem disablePadding sx={{padding:'11px 0px'}}>
                            <ListItemIcon ><HiOutlineLocationMarker/></ListItemIcon>
                            <ListItemText primary="8819 Ohio St. South Gate, California 90280" />
                        </ListItem>

                        <ListItem disablePadding sx={{padding:'11px 0px'}}>
                            <ListItemIcon><HiOutlineMail/></ListItemIcon>
                            <ListItemText primary="ourstudio@hello.com" />
                        </ListItem>
                        
                        <ListItem disablePadding sx={{padding:'11px 0px'}}>
                            <ListItemIcon><HiOutlinePhone/></ListItemIcon>
                            <ListItemText primary="+271 386-647-3637" />
                        </ListItem>
                    </IconContext.Provider>
                </List>
            </Box>
        </div>
    </div>
  )
}
export default Footer