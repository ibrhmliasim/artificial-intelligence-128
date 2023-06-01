import React from 'react'

import '../components/WhatOur.css'
import WhatOurImg from '../assets/images/whatour.svg'

const WhatOur = () => {
  return (
    <div className='what-our row'>
    <div className="whatour-left-side col-12 col-md-6">
        <h2>What our clients say about our awesome solutions</h2>

        <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cumque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam nesciunt iusto porro odit possimus.</p>

    </div>

    <div className="whatour-right-side col-12 col-md-6">
        <img src={WhatOurImg} alt="" className='whatour-img' />
    </div>
</div>
  )
}

export default WhatOur