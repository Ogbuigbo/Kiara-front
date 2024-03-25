// @ts-nocheck
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingCartOutlined,
  MenuOutlined,
  SearchOutlined,
  Close
} from '@mui/icons-material';
import { useNavigate, Link } from "react-router-dom";
import { shade } from "../../theme.js";
import logo from './Logo.jpg';
import { setIsCartOpen } from "../../state/index.js";
import { NAV_LINKS } from "../../state/data.js";
import Search from "./Search.jsx";
import SearchIcon from '@mui/icons-material/Search';
import FacebookSvg from '../../assets/Socials/facebook.jsx'
import TwitterSvg from '../../assets/Socials/twitter.jsx';
import InstagramSvg from '../../assets/Socials/instagram.jsx';


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[nav, setNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setNav(!nav)
  }

  const cart = useSelector((state) => state.cart.cart)
  

  return (
    <Box
    display='flex'
    alignItems="center"
    width="100%"
    height="60px"
    backgroundColor="rgba(255, 255, 255, 0.95)"
    color="black"
    position="fixed"
    top="0"
    left="0"
    zIndex="1"
    className='flex-col'
  >
    <Box
      width="80%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        onClick={() => navigate("/")}
        sx={{ "&:hover": { cursor: "pointer" } }}
        color={shade.secondary[500]}
      >
        <img  src={logo} alt="" style={{width:'45px', borderRadius:'50px',}}  />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <div className="mt-[8px]" >
          <SearchIcon onClick={() => setShowSearch(true)} />
          </div>
          <div className="hidden md:flex">
          <IconButton sx={{ color: "black" }} >
            <PersonOutline/>
          </IconButton>
          </div>
          
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingCartOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }} onClick={handleClick}>
            {!nav && <MenuOutlined />}
          </IconButton>

          <div className={`fixed top-0 left-0 h-screen w-72 z-[99] bg-black shadow-md text-white transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out pb-8`}>
              <div className="h-screen overscroll-y-contain  z-50">
                 {/* Add this wrapper */}
              <ul className='absolute top-[190px] flex flex-col justify-center mt-[-50px] px-6  gap-11  z-50'>
                {NAV_LINKS.map((link) => (
                <a href={link.href} key={link.key} className="regular-16 text-gray-600 hover:text-white  cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </a>
              ))}

              </ul>

            <div>
            <Link to='/'> <img  src={logo} alt="" style={{width:'45px', borderRadius:'50px',}} className='absolute top-5 left-5 '  /></Link>
            <button className='absolute top-8 right-6 text-white' onClick={handleClick}>
             <Close className="font-large"/>
            </button>
            </div>

          <Box width='clamp(20%, 30%, 40%)' className='flex flex-col absolute bottom-[150px] left-4' gap='100px'>
          <Box  display='flex' gap='20px'>
          <a href="">
						<FacebookSvg  />
					</a>

					<a href="#">
						<TwitterSvg />
					</a>

					<a href="#">
						<InstagramSvg />
					</a>

			
          </Box>
          </Box>
            </div>
            </div>
           
        </Box>

      </Box>
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </Box>
  )
}

export default Navbar
