import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./footer.css";

import img from "../../assets/images/header-img/Rariko transparent logo.png";

export default function Footer() {
  return (
    <div>
        <div className="footer-section">
            <div>
              <img src={img} alt="img" />
              <h1>Rari<span>Ko</span></h1>
            </div>
            <div className='icons'>
                <InstagramIcon/>
                <TelegramIcon/>
                <TwitterIcon/>
                <LinkedInIcon/>
            </div>
            <p>for partnerships <br/><span>info@rariko.io</span></p>
        </div>
        <div className="bottom-footer"><p>Copyright &#169; Rariko 2022. All rights reserved</p></div>
    </div>
  )
}
