import React, { useState ,useEffect,useRef} from 'react';
import './App.css';

function  Calculator(){
  const [input, setInput] = useState('0');
  const [dis, setDis] = useState('');
  const [res, setRes] = useState('0');



  const inputKey = (event) => {
    const { key } = event;
    if (/^[0-9./]$/.test(key)) {
      handleClick(key);
    } else if (/^[+\-*/]$/.test(key)) {
     // alert(input)
      
      setInput('')
      handleOperation(key);
    } else if (key === 'Enter') {
      setRes(eval(dis))
     // calculateResult();
    } else if (key === 'Escape') {
      //clear();
      setInput('0')
      setDis('')
      setRes('0')
    }
  };

  const handleClick=(key)=>{
    if(input=='0'){
      //alert(key)
      setInput(key)
      setDis(dis+key)
    }else{

      setInput(input+key)
      setDis(dis+key)

      
    }
  };

  const handleOperation=(key)=>{
    setDis(dis+key)

  };

 
 

  return (
    <div className="calculator" >
      <div className="display">
        <input type="text" value={input} onKeyDown={inputKey}  />
        <br></br><br></br><span className="result">{dis}</span>
        <br></br><br></br><span className="result">Res={res}</span>
      </div>
    </div>
  );
}

export default Calculator;
