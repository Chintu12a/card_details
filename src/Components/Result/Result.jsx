import React from 'react';
import {ReactComponent as Complete} from 'https://github.com/khasTema/credit_card_form_component/blob/master/src/images/bg-main-desktop.png?raw=true';
import Button from '../Button/Button';
import "./Result.scss"

const Result = ({allClear}) => {
  return (
    <div className='result-part'>
        <div className="result-icon">
            <Complete />
        </div>
        <h3 className="result_greetings">THANK YOU!</h3>
        <p className="result_deskr">We've added your card details</p>
        <Button clikHandler={allClear} />
    </div>
  )
}

export default Result;