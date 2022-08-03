import React from 'react'
import { Button } from '@mui/material'
import Link from '@mui/material/Link';
import Navbar from "./Navbar/Navbar"
import "./header.css"
import img1 from "../../assets/images/header-img/Hero IMage.png"

export default function Header() {
  return (
    <div>
        <Navbar/>
        <div className="header-section">
          <div>
            <span className="para-first">
              Time To
             <br/> Colonize The <br/>
            </span>
            <span className="para-second">World of Web 3.0</span><br/>
            <span className="para-third">
              Join us on this mission of making Web 3.0 a <br/> reality or some text along these lines would here
            </span><br/>
            <Button variant="contained"><Link href="https://docs.google.com/forms/d/e/1FAIpQLSccq1DdUgAE2vY3nB7d3HXcI0v1xi53aRsGlFUaYj8LtotgtQ/viewform">Get OnBoarded</Link></Button>
          </div>
          <img src={img1} alt="img1" className='img1' />
        </div>
    </div>
  )
}
