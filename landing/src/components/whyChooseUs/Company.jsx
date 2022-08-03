import React from 'react'
import img3 from "../../assets/images/all-img/Profile follow(mobile).png"
import image2 from "../../assets/images/all-img/image2.png"
import image3 from "../../assets/images/all-img/image3.png"
import "./company.css"

export default function Company() {
  return (
    <div id="whyUs" className='third-section'>
        <h1>Why choose us?</h1>
        <div className='third-wrapper'>
            <img src={img3} alt="img3" />
            <div className='section-content'>
                <div>
                    <img src={image2} alt="image2" />
                    <h2>Digital Identities</h2>
                    <ul>
                        <li>Chain agnostic</li>
                        <li>Zero-knowledge</li>
                        <li>Non-transferable</li>
                    </ul>
                </div>
                <div>
                    <img src={image3} alt="image3" />
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
