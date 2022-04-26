import React from "react";
import { AppBar, Badge, Box, Button, IconButton, Stack, styled, Toolbar, Typography, useMediaQuery } from "@mui/material";
import {HiOutlineMenu, HiOutlinePhone, HiOutlineShoppingCart} from 'react-icons/hi'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube, FaRegUser} from 'react-icons/fa'
import {FiHeart} from 'react-icons/fi'
import Logo from '../../assets/images/logo.png'
import { theme } from "../../theme";
import { IconContext } from "react-icons";

const NavBar = () => {

    const icons = [
        {icon:FaFacebook, link:'https://www.facebook.com'},
        {icon:FaTwitter, link:'https://www.twitter.com'},
        {icon:FaInstagram, link:'https://www.instagram.com'},
        {icon:FaYoutube, link:'https://www.youtube.com'}
    ];
    const pages = ['Home', 'About', 'FAQ', 'Blog'];

    const HBox = styled(Box)(({theme})=>({display:'flex', gap:'20px', alignItems:'center'}))

    const CustomToolbar = styled(Toolbar)(({theme})=>({
        justifyContent:'space-between', position:'sticky', 
    }))

    const RightIcons = ({size}) => (
     
        <IconContext.Provider value={{color:"#11142D", size:size}} >
                <FiHeart/>
                <Badge badgeContent={4} color="primary" >
                    <HiOutlineShoppingCart />
                </Badge>
                <FaRegUser/>
        </IconContext.Provider>
     
    )

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar sx={{
        flexDirection:'column',
         backgroundColor:'white',
         color:'#11142D', 
         padding:isMobile ? '0px 25px' : '0px 75px', 
         fontFamily:'DM Sans',
         boxShadow:'none',
         position:'static'
         }}>

        <CustomToolbar sx={{position:'static', display: isMobile && 'none' }}>

        <HBox sx={{gap:'10px'}}>
            <HiOutlinePhone size={20}/>
            <Typography> +022 319 821 967</Typography>
        </HBox>

        <img src={Logo} alt="" width={200}/>
        
        <HBox>
            {icons.map((item)=>(
                <a href={item.link}>
                    <item.icon size={20} color='#11142D'/>
                </a>
            ))}
        </HBox>
        </CustomToolbar>
        
        <CustomToolbar sx={{display: isMobile && 'none' }}>
            <HBox>
                {pages.map((page)=>(
                    <Button
                    key={page}
                    sx={{ color:'#11142D', textTransform: 'none', }}
                  >
                    {page}
                  </Button>
                ))}
            </HBox>
            <HBox sx={{gap:'30px'}}>
                {RightIcons(25)}
            </HBox>
        </CustomToolbar>

        {/* Mobile NavBar */}
        <CustomToolbar sx={{display: !isMobile && 'none' }}>
        <HBox sx={{gap:'0px'}}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <HiOutlineMenu />
          </IconButton>
        <img src={Logo} alt="" width={150}/>
        </HBox>
        <HBox>
            {RightIcons(20)}
        </HBox>
        </CustomToolbar>
    </AppBar>
  )
}
export default NavBar