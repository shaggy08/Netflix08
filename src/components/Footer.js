import React from 'react'
import { BsFacebook, BsYoutube,BsTwitter ,BsInstagram } from 'react-icons/bs';
import './Footer.css';

function Footer() {
    
    return (
        <div className="foot_contain">

       
         <div class="logos">
        <BsFacebook  className="footer_icon"/>
        <BsTwitter  className="footer_icon"/>
        <BsInstagram  className="footer_icon"/>
       <BsYoutube  className="footer_icon"/>
      </div>
      <div class="sub-links">
        <ul>
          <li>Audio and Subtitles</li>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards </li>
          <li>Media Cente</li>
          <li>Investor Relatons</li>
          <li>Jobs</li>
         <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Corporate Infomation</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <footer>
      <p>©1997-2022 Netflix, Inc.</p>
      <p>©Sahil</p>
    </footer>
      </div>

    )
}

export default Footer
