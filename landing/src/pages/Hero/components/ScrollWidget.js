import React from 'react'
import { Box } from '@mui/system'
import { Stack, Typography } from '@mui/material'

const ScrollWidget = () => {
  return (
    <Box sx={{display: {md: 'block', xs: 'none'}}}>
      <Stack sx={{'&:hover' : {height: '40px', transition: '0.5s all ease-in'}}} direction={'column'} justifyContent={'space-between'}>
        <Typography sx={{color: 'white', fontSize: '12px'}}>Scroll down</Typography>
        <Typography sx={{color: 'white', fontSize: '12px', transform: 'rotate(90deg)'}}>></Typography>
      </Stack>
    </Box>
  )
}

export default ScrollWidget
