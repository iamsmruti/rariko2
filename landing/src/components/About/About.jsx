import React from 'react'
import img2 from "../../assets/images/about-img/Image 6.png"
import "./about.css"

export default function About() {
  return (
    <div className="about-section">
      <div className="about">
        <div className="about-content">
        <h1>Who are we?</h1>
        <h3>RariKo is a decentralized social messaging platform that allows users to create an identity, socialize with fellow blockchain sapiens and access all their favorite communities in few clicks.
        We are introducing safer and simpler community management tools. Finally a platform built for real users not for bots and scammers.</h3>
        </div>
        <img src={img2} alt="img2" />
      </div>
    </div>
  )
}
