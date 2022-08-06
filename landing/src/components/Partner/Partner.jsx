import React from 'react'
import Box from '@mui/material/Box';
import "./partner.css"
import covalent from "../../assets/images/partners/Image 28.png"
import metamask from "../../assets/images/partners/Mask Group 13.png"
import buildgang from "../../assets/images/partners/Buidl Gang.png"
import phantom from "../../assets/images/partners/Image 31.png"
import moralis from "../../assets/images/partners/Image 27.png"
import wallet_connect from "../../assets/images/partners/Wallet connect logo.png"
import { Typography } from '@mui/material';

export default function Partner() {
  return (
    <div className="partner-section">
      <Typography sx={{textTransform: 'uppercase', fontSize: '12px', mb: 3}}>Partnered With</Typography>
      <Box className="partner">
          <img src={covalent} alt="covalent" />
          <img src={metamask} alt="metamask" />
          <img src={buildgang} alt="buildgang" />
          <img src={phantom} alt="phantom" />
          <img src={moralis} alt="moralis" />
          <img src={wallet_connect} alt="wallet_connect" />
      </Box>
    </div>
  )
}
