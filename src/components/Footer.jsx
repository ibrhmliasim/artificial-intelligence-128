import React from 'react'
import '../components/Footer.css'

import myCompanyLogo from '../assets/images/logo.svg'
import mailLogo from '../assets/images/mail-logo.svg'
import phoneLogo from '../assets/images/phone-logo.svg'
import addressLogo from '../assets/images/address-logo.svg'
import facebookLogo from '../assets/images/facebook-logo.svg'
import instagramLogo from '../assets/images/insta-logo.svg'
import twitterLogo from '../assets/images/twitter-logo.svg'
import linkedinLogo from '../assets/images/linkedin-logo.svg'
import youtubeLogo from '../assets/images/youtube-logo.svg'
import globeLogo from '../assets/images/globe.svg'
import bottomArrow from '../assets/images/bottom-arrow.svg'


const Footer = () => {
  return (
    <>

    <div className='kolonlar'>

        <div className='first-column'>

        <img className = "my-brand" src={myCompanyLogo} alt="" />
        <p>Lorem ipsum is placeholder text  commonly used in the graphic, print,  and  layouts and mockups.</p>

        <div className='linkler'>
            <img src={mailLogo} /> <a href='mailto:company@gmail.com.' className='mail'>company@gmail.com</a>
            <img src={phoneLogo} /> <a className='phone' >Phone: (064) 332-1233</a>
            <img src={addressLogo} /> <a className='address'>450 Wall Street, USA, New York</a>
        </div>

        </div>

        <div className='footer-center'>

        <div className='second-column'>
            <span>INFORMATION</span>
            <p>New Collection</p>
            <p>About Store</p>
            <p>Contact Us</p>
            <p>Latest News</p>
            <p>Our Sitemap</p>
            <p>Orders History</p>
        </div>

        <div className='third-column'>
            <span>FOOTER MENU</span>
            <p>New Collection</p>
            <p>About Store</p>
            <p>Contact Us</p>
            <p>Latest News</p>
            <p>Our Sitemap</p>
            <p>Orders History</p>
        </div>

        <div className='fourth-column'>
            <span>USEFUL LINKS</span>
            <p>New Collection</p>
            <p>About Store</p>
            <p>Contact Us</p>
            <p>Latest News</p>
            <p>Our Sitemap</p>
            <p>Orders History</p>
        </div>

        </div>

        <div className='fifth-column'>

            <span>ABOUT THE STORE</span>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, layouts and visual mockups.</p>
            <a href="">www.company.com</a>

            <div className='social-media'>
                <img src={facebookLogo} alt="facebook" />
                <img src={instagramLogo} alt="instagram" />
                <img src={twitterLogo} alt="twitter" />
                <img src={linkedinLogo} alt="linkedin" />
                <img src={youtubeLogo} alt="youtube" />
            </div>

            <div className='language'>
                <img src={globeLogo}/>
                <p>English</p>
                <img src={bottomArrow} alt="" />
            </div>

        </div>

    </div>

    </>
  )
}

export default Footer