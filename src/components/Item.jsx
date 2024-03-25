// @ts-nocheck
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Box, IconButton, Typography, useTheme, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import  RemoveIcon  from '@mui/icons-material/Remove';
import { shade } from '../theme.js';
import { addToCart } from '../state/index.js';
import { useNavigate } from 'react-router-dom';

function Item({item, width}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const {
        // @ts-ignore
        palette: { neutral },
    } = useTheme();

    const {category, price, name, image} = item.attributes;
    const {
        data: {
            attributes: {
                formats: {
                    medium: { url },
                }
            }
        }
    }= image
     

  return (
    <Box width={width}>
        <Box
        position='relative' 
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        >
            <img 
            width='300px'
            height='400px'
            src={`http://localhost:1337${ url}`}
            onClick={()=>navigate(`item/${item.id}`)}
            style={{cursor:'pointer'}}
            alt={item.name} />
            <Box
            display={isHovered? 'block' : 'none'}
            position='absolute'
            bottom='10%'
            left='0'
            width='100%'
            padding='0 5%'
            >
                <Box display='flex' justifyContent='space-between'>
                    <Box display='flex' alignItems='center' bgcolor={shade.neutral[100]} borderRadius='3px'>
                    <IconButton
                        onClick={()=> setCount(Math.max(count -1, 1))}
                    >
                        <RemoveIcon/>
                    </IconButton>
                    <Typography color={shade.primary[300]}>{count}</Typography>
                    <IconButton
                    onClick={()=> setCount(Math.max(count + 1 ))}
                    >
                    <AddIcon/>
                    </IconButton>
                    </Box>

                    {/* BUTTON */}
                    <Button
                    onClick={()=> {dispatch(addToCart({ item: {...item, count}}))}}
                    sx={{backgroundColor: shade.primary[300], color: 'white'}}
                    >
                        Add to cart
                    </Button>
                </Box>
            </Box>
        </Box>
      
      <Box
      mt='3px'
      >
        <Typography variant='subtitle2' color={neutral.dark}>
            {category
            .replace(/([])/g, "₦1").replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography>₦{price}</Typography>
      </Box>
    </Box>
  )
}

export default Item;
