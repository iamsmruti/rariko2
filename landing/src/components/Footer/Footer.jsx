import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./footer.css";

import img from "../../assets/images/header-img/Rariko transparent logo.png";
import { Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <div>
        <div className="footer-section">
            <div className='footer-logo'>
              <img src={img} alt="img" />
              <h1>Rari<span>Ko</span></h1>
            </div>
            <div className='icons'>
                <InstagramIcon/>
                <TelegramIcon/>
                <TwitterIcon/>
                <LinkedInIcon/>
            </div>
            <Stack direction={'column'} justifyContent={{md: 'center', xs: 'flex-start'}}>
              <Typography variant='caption' sx={{color: 'white', ml: {md: 0, xs: -2}}}>For partnerships</Typography>
              <Typography variant='body1' sx={{color: 'gray', fontSize: '18px'}}>info@rariko.io</Typography>
            </Stack>
        </div>
        <div className="bottom-footer"><p>Copyright &#169; Rariko 2022. All rights reserved</p></div>
    </div>
  )
}
