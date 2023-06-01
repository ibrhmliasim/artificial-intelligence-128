import React from 'react'
import './AwardsContainer.css'


const Award = ({meqaleninBashligi,meqaleninIconu,meqaleninMetni}) => {
  return (
    <div className='award-card ms-auto'>
        <img src={meqaleninIconu} className='icon-size' alt="" />
        <h3>{meqaleninBashligi}</h3>
        <p>{meqaleninMetni}</p>
    </div>
  )
}

export default Award