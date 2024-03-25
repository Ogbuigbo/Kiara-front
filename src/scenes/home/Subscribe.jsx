// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Box, InputBase, Divider, Typography, IconButton, Button } from '@mui/material';
import { MarkEmailReadOutlined } from '@mui/icons-material';


function Subscribe({onValidate, status, message}) {
    const [email, setEmail] = useState('');


    useEffect(() => {
        if(status === 'success') clearField();
    })

    const handleSubmit = () => {
        e.preventDefault();
        email && 
        email.indexOf("e") > -1 && 
        onValidate({
            Email: email
        })
    }

    const clearField = () => {
        setEmail("");
    }
  return (
    <Box
    width='80%'
    margin='80px auto'
    textAlign='center'
    >
      <IconButton>
        <MarkEmailReadOutlined fontSize='large' />
      </IconButton>
      <Typography variant='h3'>
        Subscribe To Our Newsletter
      </Typography>
      <Typography variant='h3'>
        Get updates on our Products while  connecting to God
      </Typography>
      <form
      style ={{padding: '2px 4px', margin: '15px auto', display: 'flex', alignItems:'center', width: '75%', backgroundColor: '#F2F2F2'}}
      onSubmit={handleSubmit}
      >
        <InputBase
        sx= {{ml:1, flex: 1}}
        placeholder='Enter email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type='email'
        />
        <Divider sx={{height: 28, m:0.5}} orientation='vertical' />
        <Button sx={{p: '10px', ":hover": {cursor: "pointer"}}} type='submit'  >Subscribe</Button>
      </form>
    </Box>
  )
}

export default Subscribe
