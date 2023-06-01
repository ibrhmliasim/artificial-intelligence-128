

import React from 'react'

const PartnerCompany = ({shirketinLogosu, shirketinAdi}) => {
  return (
    <div className='companies col-12 col-md-6 col-lg-3'>
        <img src={shirketinLogosu} alt={shirketinAdi} className='shirketin-logosu'/>
    </div>
  )
}

export default PartnerCompany