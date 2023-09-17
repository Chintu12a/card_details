import React, { useState } from 'react'
import "./Forms.scss"
import Button from '../Button/Button'

const Forms = ({setUserName,setCarNumber,setMMDate, setYYDate, setCVC_Code, isFilled, buttonHandler, allClear}) => {
    

  return (
    <div className="user_info_form">
        <form>
            <div className="card-data">
                <label className="input-labels" id="username-label" htmlFor="username">Cardholder Name</label>
                <input className="input-fields" type="text" id="username" name="username" 
                    onChange={(e) =>setUserName(e.target.value)}
                    placeholder='e.g. Jane Appleseed'>
                </input>
                <span id='name-error' className="input_error">Can't be blank</span>
                <label className="input-labels" id="number-label" htmlFor="cardnumber">Card Number</label>
                <input className="input-fields" type="text" id="cardnumber" name="cardnumber" 
                    onChange={(e) =>setCarNumber(e.target.value)}
                    placeholder='e.g. 1234 5678 9123 0000' maxLength={16}>
                </input>
                <span id='number-error' className="input_error">Wrong format!</span>
            </div>
            <div className="card-security-data">
                <div className="exp-date__block">
                    <label className="input-labels" id="date-label" htmlFor="exp-date">Exp. Date (MM/YY)</label>
                    <div className="date_input">
                        <input className="input-fields" type="text" id="exp-date-mm" name="exp-date" 
                            onChange={(e) => setMMDate(e.target.value)} 
                            placeholder='MM' maxLength={2}>
                        </input>
                        <input className="input-fields" type="text" id="exp-date-yy" name="exp-date" 
                            onChange={(e) =>setYYDate(e.target.value)}
                            placeholder='YY' maxLength={2}>
                        </input>
                    </div>
                    <span id='date-error' className="input_error">Wrong info</span>
                </div>
                <div className="security-code__block">
                    <label className="input-labels" id="code-label" htmlFor="cvc-code">CVC</label>
                    <input className="input-fields" type="text" id="cvc-code" name="cvc-code" 
                        onChange={(e) =>setCVC_Code(e.target.value)}
                        placeholder='e.g. 123' maxLength={3}>
                    </input>
                    <span id='code-error' className="input_error">Wrong format!</span>
                </div>
            </div>
            <Button clikHandler={buttonHandler} isFilled={isFilled} allClear={allClear} />
        </form>
    </div>
  )
}

export default Forms