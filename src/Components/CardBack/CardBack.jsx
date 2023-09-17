import React from 'react'

// let cvc_code = 100;
const CardBack = ({cvc_code}) => {
  return (
    <div className='card-back card'>
    <span className="ccv-code">{cvc_code.length > 0 ? cvc_code : '000'}</span>
  </div> 
  )
}

export default CardBack