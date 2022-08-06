import React from 'react'
import "./work.css"
import img1 from "../../assets/images/all-img/image1.png"
import img2 from "../../assets/images/all-img/image4.png"
import img3 from "../../assets/images/all-img/image5.png"
import img4 from "../../assets/images/all-img/image6.png"
import { Typography } from '@mui/material'

export default function Work() {
  return (
    <div id="product" className="work-section">
        <Typography variant='h4' sx={{color: 'white', mb: 10, mt: 3}}>Product Features</Typography>
        <div className='forth-wrapper'>
            <div className='card'>
                <img src={img2} alt="img2"/>
                <h2>Automated Communities</h2>
                <ul>
                    <li>Instant token-gated access.</li>
                    <li>Real-time asset authentication (RTAA)</li>
                    <li>Anti- Phishing checks.</li>
                    <li>Discover more communities.</li>
                </ul>
            </div>
            <div className='card'>
                <img src={img1} alt="img1"/>
                <h2>Be a part of governance</h2>
                <ul>
                    <li>Zero-knowledge voting.</li>
                    <li>multi-wallet curated rights.</li>
                    <li>Easy delegation.</li>
                    <li>EVM and Sol compatible.</li>
                </ul>
            </div>
            <div className='card'>
                <img src={img4} alt="img4"/>
                <h2>P2P trades</h2>
                <ul>
                    <li>Transfer/trade NFTs in chats.</li>
                    <li>Find Buyers.</li>
                    <li>Simple and trustless.</li>
                </ul>
            </div>
            <div className='card'>
                <img src={img3} alt="img3"/>
                <h2>Socialise & Earn</h2>
                <ul>
                    <li>Activity based rewards</li>
                    <li>Win crypto & NFTs</li>
                    <li>Weekly leaderboards</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
