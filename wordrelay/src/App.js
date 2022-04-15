//hooks version
import Class, { useState, useRef } from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('하몽');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState('');
  const inputRef = useRef(null);
  
  const onSubmitInput = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]){
      setWord(value);
      setAnswer('correct');
    }else{
      setAnswer('wrong, try again')
    }
    setValue('');
  }

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  return(
    <>
    <div>{word}</div>
    <form onSubmit={onSubmitInput}>
      <input ref = {inputRef} value = {value} onChange = {onChangeInput} autoFocus />
    </form>
    <div>{answer}</div>
  </>)
}


export default WordRelay;