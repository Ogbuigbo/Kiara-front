import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { NavigateBefore } from '@mui/icons-material';
import { NavigateNext } from '@mui/icons-material';
import { shade } from '../../theme.js';
import { ABOUT } from '../../state/data.js';

function About() {
  return (
    <div>
    <div className="hero">
    <div className="hero__image-container">
       <div className="hero__image">
          <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>(
              <IconButton
              onClick={onClickHandler}
              sx={{
                  position: 'absolute',
                  top:'50%',
                  left: '0',
                  color: 'white',
                  padding: '5px',
                  // zIndex: '1'
              }}
              className='z-[1]'
              >
                  <NavigateBefore sx={{fontSize: 40}}/>
              </IconButton>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) =>(
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
          >
            {ABOUT.map((item, index)=> (
               <img src={item.img} alt="banner" className="object-cover w-[90%] h-[790px]" key={index} />
            ))}
         
          </Carousel>
           
       </div>
    </div>
    <div className="flex-1 pt-[200px] padding-x ">
       <h1 className="hero__title">
           MEET JEDIDIAH OKEY NWALA
       </h1>

       <p className="hero__subtitle">
           Owner of Kiara Jewelery Store
       </p>

       <p>
						Throughout her career, Jedidiah has marked both
						achievements and challenges, each contributing to the
						narrative of my professional and personal journey. One
						notable accomplishment stands out—the success and
						failure of his first investment company.
					</p>
					<p>
						The inception and very rapid growth of this company
						weren&apos;t merely milestones; they were a testament to
						a vision that sought to redefine how investment services
						were approached and delivered. It was not just about
						creating a product but fundamentally reshaping an
						industry, leveraging technology to enhance
						accessibility, efficiency, and the overall experience
						for investors.
					</p>
					<p>
						However, success comes with threads of challenges, each
						representing an invaluable lesson and an opportunity for
						growth. The initial setback, marked by the failure of
						his first startup, was a pivotal moment. It wasn&apos;t
						a barrier but a stepping stone—a moment that required
						resilience, determination, and a reevaluation of
						strategies. He learned the importance of adaptability
						and the resilience required to navigate the
						unpredictable terrain of entrepreneurship. Failure
						became a catalyst for innovation, pushing him to refine
						his approach, learn from mistakes, and cultivate a
						mindset that sees obstacles not as insurmountable
						hurdles but as invitations to find creative solutions.
					</p>
    </div>
   
   </div>

   
   </div>
  )
}

export default About
