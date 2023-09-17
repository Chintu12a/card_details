import React from 'react'
import "./_button.scss"

const Button = ({isFilled, clikHandler, allClear}) => {
    return (
        <button className="action-btn" type='submit' onClick={clikHandler}>
          {isFilled ? 'Confirm' : 'Check'}
        </button>
      )
}

export default Button