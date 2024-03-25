import React from 'react';
import { Box, Button, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { NavigateBefore } from '@mui/icons-material';
import { NavigateNext } from '@mui/icons-material';
import { shade } from '../../theme.js';
import { IMAGES } from '../../state/data.js';


// function importAll(r) {
//     return r.keys().reduce((acc, item) => {
//       acc[item.replace("./", "")] = r(item);
//       return acc;
//     }, {});
//   }
  
//   const heroTextureContext = require.context("../../assets", false, /\.(png|jpe?g|svg)$/);
  
//   // Convert to ECMAScript module syntax
//   const heroTextureImports = importAll(heroTextureContext);
//   export { heroTextureImports };

function MainCarousel() {
    const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Carousel
    className='relative'
    infiniteLoop={true}
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    interval={5000}
    autoPlay={true}
    showArrows={true}
    swipeable={true}
    swipeScrollTolerance={5}
    renderArrowPrev={(onClickHandler, hasPrev, label) =>(
      
                 <IconButton
                 onClick={onClickHandler}
                 sx={{
                     position: 'absolute',
                     top:'50%',
                     right: '0',
                     color: 'white',
                     padding: '5px',
                     zIndex: '1'
                 }}
                 >
                     <NavigateNext sx={{fontSize: 40}}/>
                 </IconButton>
    )}
    renderArrowNext={(onClickHandler, hasNext, label) =>(
      <IconButton
      onClick={onClickHandler}
      sx={{
          position: 'absolute',
          top:'50%',
          left: '0',
          color: 'white',
          padding: '5px',
          
      }}

      >
          <NavigateBefore sx={{fontSize: 40}}/>
      </IconButton>
    
    )}
    >
      {IMAGES.map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
            <img className='image' src={texture.img} alt="" style={{width:'100%', height:'700px', objectFit:'cover', backgroundAttachment:'fixed' }} />
            <Box
            color='white'
            padding='20px'
            borderRadius='1px'
            bgcolor='rgb(0, 0, 0, 0.4)'
            position='absolute'
            top='40%'
            left={isNonMobile? '10%' : '0'}
            right={isNonMobile ? undefined : '0'}
            margin={isNonMobile ? undefined : '0 auto'}
            maxWidth={isNonMobile ? undefined : '240px'}
            >
              <Typography color={shade.secondary[200]}>
                --NEW ITEMS
              </Typography>
              <Typography variant='h1'>
                Summer Sale
              </Typography>
              <Typography fontWeight='bold' color={shade.secondary[300]} sx={{textDecoration: 'underline'}}>
                Discover More
              </Typography>
            </Box>
        </Box>
      ))}
    </Carousel>
  )
}

export default MainCarousel
