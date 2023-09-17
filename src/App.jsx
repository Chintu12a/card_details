import { useState } from 'react'
import './App.scss'
import Button from './Components/Button/Button'
import CardBack from './Components/CardBack/CardBack'
import CardFront from './Components/CardFront/CardFront'
import "./App.scss"
import Forms from './Components/Forms/Forms'

function App() {
  
  const [username, setUername] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvcCode, setCvcCode] = useState("");
  const [expDateMM, setExpDateMM ] = useState('');
  const [expDateYY, setExpDateYY ] = useState('');
  const [isFilled, setIsFilled ] = useState(false);

// console.log(userReg);

function checkData () {
  if(username.length == ""){
      document.getElementById('username-label').classList.add('labels_error')
      setIsFilled(false)
  } else { 
    document.getElementById('username-label').classList.remove('labels_error') 
      setIsFilled(true)
  }
  
  if(!Number(cardNumber)) {
      document.getElementById('number-label').classList.add('labels_error')
      setIsFilled(false)
  } else { 
      setIsFilled(true)
      document.getElementById('number-label').classList.remove('labels_error') 
  }
  
  if (Number(expDateMM) > 12 || expDateMM.length <1 || Number(expDateYY) < 22 ||expDateYY.length < 1) {
      document.getElementById('date-label').classList.add('labels_error')
      setIsFilled(false)
  } else { 
      setIsFilled(true) 
      document.getElementById('date-label').classList.remove('labels_error')
  }
  
  if (!Number(cvcCode) || cvcCode.length < 3) {
      document.getElementById('code-label').classList.add('labels_error')
      setIsFilled(false)
  } else { 
      setIsFilled(true)
      document.getElementById('code-label').classList.remove('labels_error') 
  }
};

function allClear () {
  // e.preventDefault()
  setCardNumber('');
  setUername('');
  setCvcCode('');
  setExpDateMM('');
  setExpDateYY('');
  setIsFilled(false);
};

function no() {
  alert("Nice");
  allClear();
};

function buttonHandler(e){
  e.preventDefault()
  isFilled ? no() : checkData();
};

  return (
    <>
      <main className="wrapper">
        <div className="panel">
          <CardBack cvc_code={cvcCode}/>
          <CardFront username={username} cardNumber ={cardNumber} mmDate={expDateMM} yyDate={expDateYY}/>
        </div>
        <div className="user-input">
          <Forms setUserName={setUername} setCarNumber={setCardNumber} set setCVC_Code={setCvcCode} setMMDate={setExpDateMM} setYYDate={setExpDateYY} isFilled={isFilled} buttonHandler={buttonHandler} />
        </div>
      </main>
    </>
  )
}

export default App
