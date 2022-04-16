import Class, { useState, useRef } from 'react';
import Try from './Try.jsx';

let numbers = [];

const onClickInput = (function(){
  numbers = [];
  while(numbers.length !== 4){
    let number = Math.floor(Math.random() * 10 );
    if(!numbers.includes(number)){
      numbers = [...numbers, number];
    };
  }
  console.log(numbers);
})();


const App = () => {
  const [value, setValue] = useState(''); 
  const [answer, setAnswer] = useState(''); 
  const [history, setHistory] = useState([]); 

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onSubmitInput = (e) => {
    e.preventDefault();
    if( numbers.join('') === value ){//홈런
      setAnswer('HOMERUN');
      
    }else{//홈런이 아닐때
      let strike = 0;
      let ball = 0;

      let values = value.split('').map((v)=>{return parseInt(v)});
      for(let i =0; i < values.length; i++){
        if( values[i] === numbers[i] ){ //strike
          strike++;
        }else if( numbers.includes(values[i]) ){ //ball
          ball++;
        }
      }
      setAnswer(`${strike} Strike and ${ball} Ball`);
      setHistory((prevHistory)=>{
        return [...prevHistory, [strike, ball]]
      })
    }
    setValue('');
  }

  return(
    <>
        <form onSubmit={onSubmitInput}>
          <input ref={()=>{}} value = {value} onChange = {onChangeInput}  />
        </form>
        <div>{answer}</div>

        <ul>
          {
            history.map((v, i) => {
              return(
                < Try key={`${i}차 시도: ${v[0]} strike` } result = {v} index = {i}/>
              )
            })
          }
        </ul>
      </>)
}

export default App;
