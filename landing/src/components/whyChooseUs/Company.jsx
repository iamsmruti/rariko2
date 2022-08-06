import React from 'react'
import img3 from "../../assets/images/all-img/Profile follow(mobile).png"
import image2 from "../../assets/images/all-img/image2.png"
import image3 from "../../assets/images/all-img/image3.png"
import "./company.css"
import { Typography, Box } from '@mui/material'

export default function Company() {
  return (
    <div id="whyUs" className='third-section'>
        <Typography variant='h4' sx={{color: 'white', mb: 10, mt: 3}}>Why choose us?</Typography>
        <div className='third-wrapper'>
            <img style={{transform: 'scale(0.9)'}} src={img3} alt="img3" />
            <div className='section-content'>
                <Box sx={{mb: 2}}>
                    <img style={{transform: 'scale(0.7)'}} src={image2} alt="image2" />
                    <Typography variant='h2' sx={{fontWeight: 700}}>Digital Identities</Typography>
                    <ul>
                        <li>Chain agnostic</li>
                        <li>Zero-knowledge</li>
                        <li>Non-transferable</li>
                    </ul>
                </Box>
                <div>
                    <img style={{transform: 'scale(0.7)'}} src={image3} alt="image3" />
                    <h2>Multi-chain support</h2>
                    <ul>
                        <li>All-EVM chains</li>
                        <li>Solana</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
