import React from 'react'
import '../components/ApplyAI.css'

import applyAi from '../assets/images/apply-img.svg'

const ApplyAI = () => {
  return (
    <div className='apply-ai row'>

        <div className="apply-left-side col-12 col-md-6">
            <img src={applyAi} alt="" className='apply-img' />
        </div>

        <div className="apply-right-side col-12 col-md-6">
            <h2>Apply AI, Deep Learning <br /> and Data Science to solve</h2>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
</div>
  )
}

export default ApplyAI