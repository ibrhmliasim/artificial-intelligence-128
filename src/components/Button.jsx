import React from 'react'
import './Button.css'

import playIcon from '../assets/images/playicon.svg'

export const Button = ({butonunIcindekiDeyer, klassAdi, ikon}) => {

  console.log(butonunIcindekiDeyer)
  return (
    <a href=""><button className= {klassAdi} > {ikon && <img src={playIcon} className='play-icon'/>}{butonunIcindekiDeyer}</button></a>
  )
}

export default Button