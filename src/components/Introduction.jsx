import React from 'react'
import './Introduction.css'
import Typed from 'react-typed';

import introImage from '../assets/images/intro-img.svg'
import Button from './Button'


function Introduction() {
  return (
    <div className='introduction row'>
        <div className="intro-left-side col-12 col-md-6">
            <h6>Next genaretion platform</h6>
            <Typed
                className='h2'
                strings={['Artificial Intelligence', 'Cyber security', 'Solution Architect']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
            </Typed>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

            <div className="">
                <Button butonunIcindekiDeyer="Get Started" klassAdi="navbar-button margin-right"/>
                <Button butonunIcindekiDeyer="Watch Video" klassAdi="navbar-button margin-right" ikon={true}/>
            </div>
        </div>

        <div className="intro-right-side col-12 col-md-6">
            <img src={introImage} alt="" className='intro-img' />
        </div>
    </div>
  )
}

export default Introduction