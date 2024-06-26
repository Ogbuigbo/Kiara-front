// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, Typography, Button, Tabs, Tab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { shade } from "../../theme.js";
import { addToCart } from "../../state/index.js";
import { useParams } from "react-router-dom";
import Item from "../../components/Item.jsx";

function ItemDetail() {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState('description');
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* Images */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box>Home/item</Box>
            <Box>Prev Next</Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography>{item?.attributes?.price}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.attributes?.longDescription}
            </Typography>
          </Box>

          {/* Count and Button */}
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              minHeight="50px"
              border={`1.5px solid ${shade.neutral[300]}`}
              mr="20px"
              p="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{p: '0 5px'}}>{count}</Typography>
              <IconButton onClick={() => setCount(Math.max(count + 1))}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
            sx={{
              backgroundColor: '#222222',
              color: 'white',
              borderRadius: 0,
              minWidth: '15opx',
              padding: '10px 40px'
            }}
             onClick={() =>  dispatch(addToCart({ item:{...item, count} }))}
            >
              ADD TO CART
            </Button>
          </Box>

          <Box>
            <Box m='20px 0 5px 0' display='flex'>
              <FavoriteBorderOutlined />
              <Typography sx={{ml: '5px'}}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {item?.attributes?.category.replace(/^./, (str) => str.toUpperCase())}</Typography>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m='20px 0'>
            <Tabs value={value} onChange={handleChange}>
              <Tab label='DESCRIPTION' value='description'/>
              <Tab label='SHORTREVIEW' value='reviews'/>
            </Tabs>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='15px'>
              {value === 'description' && (
                <div>
                  {item?.attributes?.longDescription}
                </div>
              )}
              {value === 'reviews' && <div>reviews</div>}
            </Box>

            {/* RELATED ITEMS */}
            <Box mt='50px' width='100%'>
                <Typography variant="h3" fontWeight='bold'>Related Products</Typography>
                <Box
                mt='20px'
                columnGap='1.33%'
                justifyContent='space'
                className='grid md:grid-cols-3 lg:grid-cols-4'
                >
                  {items.slice(0,4).map((item, i) => (
                    <Item  key={`${item.name}-${i}`} item={item} />
                  ))}
                </Box>
            </Box>
    </Box>
  );
}

export default ItemDetail;
