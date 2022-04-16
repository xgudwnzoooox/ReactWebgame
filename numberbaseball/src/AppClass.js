import Class, { Component } from 'react';
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

class App extends Component{
  state = {
    value : '',
    answer : '',
    history : [],
  }

  onChangeInput = (e) => {
    this.setState({
      value : e.target.value,
    })
  }

  onSubmitInput = (e) => {
    e.preventDefault();
    if( numbers.join('') === this.state.value ){//홈런
      this.setState({
        answer : 'HOMERUN',
      })
      
    }else{//홈런이 아닐때
      let strike = 0;
      let ball = 0;

      let value = this.state.value.split('').map((v)=>{return parseInt(v)});
      for(let i =0; i < value.length; i++){
        if( value[i] === numbers[i] ){ //strike
          strike++;
        }else if( numbers.includes(value[i]) ){ //ball
          ball++;
        }
      }
      this.setState((prevState)=>{
        return{
        answer : `${strike} Strike and ${ball} Ball`,
        history : [...prevState.history, [strike, ball]],
        }
      })
    }
    
    this.setState({
      value : '',
    })
  }

  render(){
    return(
      <>
        <form onSubmit={this.onSubmitInput}>
          <input ref={()=>{}} value = {this.state.value} onChange = {this.onChangeInput}  />
        </form>
        <div>{this.state.answer}</div>

        <ul>
          {
            this.state.history.map((v, i) => {
              return(
                < Try key={`${i}차 시도: ${v[0]} strike` } result = {v} index = {i}/>
              )
            })
          }
        </ul>

        {/* <ul>
          {this.state.history.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
            );
          })}
        </ul> */}

      

      </>)
  }

}

export default App;
