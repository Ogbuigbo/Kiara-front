import React from 'react';
import { Box, Typography, useTheme  } from '@mui/material';
import { shade } from '../../theme.js';
// @ts-ignore
import logo from '../global/Logo.jpg';
import FacebookSvg from '../../assets/Socials/facebook.jsx'
import TwitterSvg from '../../assets/Socials/twitter.jsx';
import InstagramSvg from '../../assets/Socials/instagram.jsx';
import { Link } from 'react-router-dom';

function Footer() {

  // @ts-ignore
  const {  palette: {neutral} } = useTheme();

  return (
    <Box mt='70px' p='40px 0' bgcolor={neutral.light}>
        <Box
        width='80%'
        margin='auto'
        display='flex'
        justifyContent='space-between'
        flexWrap='wrap'
        rowGap='30px'
        columnGap='clamp(20px, 30px, 40px)'
        >
          <Box width='clamp(20%, 30%, 40%)' className='flex flex-col' gap='100px'>
          <img  src={logo} alt="" style={{width:'105px', borderRadius:'50px',}}  />
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
          <Box>
            <Typography variant='h4' fontWeight='bold' mb='30px'>
              About Us
            </Typography>
            <Link to='/about'><Typography mb='30px' className='hover:underline ease-in-out duration-300 transition-all hover:font-bold cursor-pointer active:underline'>Careers</Typography></Link>
            <Typography mb='30px' className='hover:underline ease-in-out duration-300 transition-all hover:font-bold cursor-pointer active:underline'>Our Stores</Typography>
            <Typography mb='30px' className='hover:underline ease-in-out duration-300 transition-all hover:font-bold cursor-pointer active:underline'>Term & Conditions</Typography>
            <Typography mb='30px' className='hover:underline ease-in-out duration-300 transition-all hover:font-bold cursor-pointer active:underline'>Privacy Policy</Typography>
          </Box>

          <Box>
            <Typography variant='h4' fontWeight='bold' mb='30px'>
              Customer Care
            </Typography>
            <Typography mb='30px' className='hover:underline ease-in-out duration-300 transition-all hover:font-bold cursor-pointer active:underline'>Help Center</Typography>
            <Typography mb='30px' className='hover:underline ease-in-out duration-300 transition-all hover:font-bold cursor-pointer active:underline'>Track Your Order</Typography>
            <Typography mb='30px' className='hover:underline ease-in-out duration-300 transition-all hover:font-bold cursor-pointer active:underline'>Corporate & Bulk Purchase</Typography>
            <Typography mb='30px' className='hover:underline ease-in-out duration-300 transition-all hover:font-bold cursor-pointer active:underline'>Returns & Refunds</Typography>
          </Box>

          <Box width='clamp(20%, 40%, 40%) md:clamp(20%, 30%, 40%)'>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
              Contact Us
            </Typography>
            <Typography mb='30px'>No 16 first Mechanic Alakhaia Port-Hacourt</Typography>
            <Typography mb='30px'>Email: jeddybabybliss@gmail.com</Typography>
            <Typography mb='30px'>(234) 0708-3668-755</Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default Footer
