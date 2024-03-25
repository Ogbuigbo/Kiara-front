import React, { useEffect, useState } from 'react';
import { Tab, Typography, Tabs, useMediaQuery, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../../components/Item.jsx';
import { setItems } from '../../state/index.js';


function ShoppingList() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    // @ts-ignore
    const items = useSelector((state) => state.cart.items);
    // console.log(items)
    const isNonMobile = useMediaQuery("(min-width:600px)");
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    async function getItems() {
      const items = await fetch(
        "http://localhost:1337/api/items?populate=image",
        { method: "GET" }
      );
      const itemsJson = await items.json();
      dispatch(setItems(itemsJson.data));
    }
  
    useEffect(() => {
      getItems();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const slicedItems = items.slice(0, 9);

    const rings = items.filter(
        (item) => item.attributes.category === "rings"
      );
      const bracelets = items.filter(
        (item) => item.attributes.category === "Bracelets"
      );
      const necklace = items.filter(
        (item) => item.attributes.category === "Necklace"
      );

  return (
    <Box width='80%' margin='80px auto'>
        <Typography variant='h3' textAlign='center'>Our Feautured <b>Products</b></Typography>
        <Tabs
        textColor='primary'
        indicatorColor='primary'
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{sx: {display: isNonMobile ? 'block' : 'none'} }}
        sx={{
           m: '25px',
           '& .MuiTabs-flexContainer': {
            flexWrap: 'wrap'
           } 
        }}
        >
           <Tab label="ALL" value="all" />
        <Tab label="Necklace" value="Necklace" />
        <Tab label="Rings" value="rings" />
        <Tab label="Bracelets" value="Bracelets" />
      </Tabs>
        <Box
        margin='0 auto'
        display='grid'
        gridTemplateColumns='repeat(auto-fill, 300px)'
        justifyContent='space-around'
        rowGap='20px'
        columnGap='1.33%'
        >
        {value === 'all' && slicedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={300} />
        ))}
        {value === 'rings' && rings.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={300} />
        ))}
        {value === 'Bracelets' && bracelets.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={300} />
        ))}
        {value === 'Necklace' && necklace.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} width={300} />
        ))}
        </Box>
    </Box>
  )
}

export default ShoppingList
