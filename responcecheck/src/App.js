import React, { useState, useRef } from 'react';

const App = () => {
  const [stage, setStage] = useState('wait');
  const [message, setMessage] = useState('if you want to start, click the screen');
  const [history, setHistory] = useState([]);
  const timerID = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  
  const onClickInput = () => {
    if(stage === 'wait'){
      setStage('ready');
      setMessage('screen will be changed soon');
  
      timerID.current = setTimeout(()=>{
        setStage('start');
        setMessage('click !');
        startTime.current = new Date();
      }, (Math.random()*2 + 2) * 1000);
  
    }else if(stage === 'ready'){
      clearTimeout(timerID.current);
      setStage('wait');
      setMessage('it is not to click time, try again');
    }else{
      endTime.current = new Date();
      setStage('wait');
      setMessage('if you want to start, click the screen');
      setHistory((prevHistory)=>{
        return [...prevHistory, endTime.current - startTime.current]
      })
    }
  }
  
  const renderResult = () => {
    return !history.length
      ? null
      : <>
        <div>평균 시간 : {history.reduce((a,c)=>{ return (a+c) },0) / history.length } ms </div>
        <div>기록 : {history[history.length-1]} ms </div>
      </>
  }
  
  return(
    <>
      <div className={stage} id = 'screen' onClick={onClickInput} >{message}</div>
      {renderResult()}
    </>)
}

export default App;