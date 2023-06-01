import React, {useRef} from 'react'


import './Navbar.css'
import './Button.css'

import myCompanyLogo from '../assets/images/logo.svg'
import Button from './Button'

// ICONLAR HISSESI
import {AiOutlineBars} from 'react-icons/ai'
import {GiCrossedSwords} from 'react-icons/gi'


const Navbar = () => {

  const overlayDivinRefi = useRef()
  console.log(overlayDivinRefi.current)

// JS React'la bagli kodlar Returnun yuxarisina yazilir

const menyunuAc = e => {
  if(e.target.classList.contains('menyunuacma-iconu')) {
    overlayDivinRefi.current.classList.add('aktiv')
  }
}

const menyunuBagla = e => {
  if(e.target.classList.contains('baglama-iconu')) {
    overlayDivinRefi.current.classList.remove('aktiv')
  }
}


return (
<>

  <div className="overlay" ref={overlayDivinRefi}>

      <button onClick={menyunuBagla} className='baglama-iconu'><GiCrossedSwords className='x-icon'/> </button>

      <div className="nav-links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Blog</a>
          <a href="mailto:info@anvarkhalid.com">Contact</a>
      </div>

  </div>


    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">

    <a className="navbar-brand text-white" href="#">
        <img src={myCompanyLogo} className = "my-brand" alt="artificial-intelligence" />
    </a>

    <button onClick={menyunuAc} className="navbar-toggler menyunuacma-iconu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <AiOutlineBars className="bars-icon-bb"/>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-1">

        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>

      </ul>

      <Button butonunIcindekiDeyer="Sign In" klassAdi="navbar-button"/>
    </div>
  </div>
    </nav>
</>
  )
}

export default Navbar