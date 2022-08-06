import React from 'react'
import Navbar from './components/Navbar.jsx'

import { Box, Grid, Button, Link } from '@mui/material'
import { Container } from '@mui/system'
import './Hero.css'


import img1 from "../../assets/images/header-img/Hero IMage.png"
import ScrollWidget from './components/ScrollWidget.js'

const Hero = () => {
    return (
        <Box className='hero-page' sx={{ minHeight: '100vh' }}>
            <Navbar />
            <Container>
                <Grid container sx={{ height: {md: 'calc(100vh - 154px)', xs: 'auto'}}}>
                    <Grid sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', pl: 3, mt: {md: 0, xs: 4},  mb: {md: 0, xs: 4} }} item md={6} xs={12}>
                        <div>
                            <span className="para-first">Time To<br /></span>
                            <span className="para-first">Colonize The <br /></span>
                            <span className="para-second">World Of Web 3.0</span><br />
                            <p className="para-third">Join us on this mission of making Web 3.0 a <br /> reality or some text along these lines would here</p>
                            <Button href='https://docs.google.com/forms/d/e/1FAIpQLSccq1DdUgAE2vY3nB7d3HXcI0v1xi53aRsGlFUaYj8LtotgtQ/viewform' variant="contained">Get OnBoarded</Button>
                        </div>
                    </Grid>
                    <Grid sx={{ display: 'flex', alignItems: 'center' }} item md={6} xs={12}>
                        <img src={img1} alt="img1" className='img1' />
                    </Grid>
                </Grid>
            </Container>
            <ScrollWidget />
        </Box>
    )
}

export default Hero
