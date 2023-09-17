import React from 'react'
import "./_card-Front.scss"

const CardFront = ({username, cardNumber, mmDate, yyDate}) => {
  return (
    <div className="card-front card">
    <div className="decorative">
      <div className="circle _big"></div>
      <div className="circle _small"></div>
    </div>
    <div className="card-number">
      <span className="__digits">
        {
          cardNumber.length > 0 ? cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim() : "0000 0000 0000 0000"
        }
      </span>
    </div>
    <div className="card_user">
      <span className="__user-name">{username.length > 0 ? username : 'John Doe'}</span>
      <span className="__exp-date">
      {mmDate.length > 0 ? mmDate : '00'}/{yyDate.length > 0 ? yyDate : '00'}
      </span>
    </div>
  </div>
  )
}

export default CardFront