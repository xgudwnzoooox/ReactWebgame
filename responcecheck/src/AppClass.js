import React, { Component } from 'react';

class App extends Component{
  state = {
    stage : 'wait',
    message: 'if you want to start, click the screen',
    history : [],
  }

  timerID;
  startTime;
  endTime;

  onClickInput = (e) => {
    const { stage } = this.state;

    if(stage === 'wait'){
      this.setState({
        stage : 'ready',
        message : 'screen will be changed soon',
      })

      this.timerID = setTimeout(()=>{
        this.setState({
          stage : 'start',
          message : 'click !',
        })
        this.startTime = new Date();
        console.log(this.startTime);
      }, (Math.random()*2 + 2) * 1000);

    }else if(stage === 'ready'){
      clearTimeout(this.timerID);
      this.setState({
        stage : 'wait',
        message : 'it is not to click time, try again',
      })
    }else{
      this.endTime = new Date();
      console.log(this.endTime, this.startTime-this.endTime);
      this.setState((prevState)=>{
        return{
          stage : 'wait',
          message : 'if you want to start, click the screen',
          history : [...prevState.history, this.endTime - this.startTime],
        }
      })
    }
  }

  renderResult = () => {
    const { history } = this.state;

    return !history.length
      ? null
      : <>
        <div>평균 시간 : {history.reduce((a,c)=>{ return (a+c) },0) / history.length } ms </div>
        <div>기록 : {history[history.length-1]} ms </div>
      </>
  }

  render(){
    const { stage, message } = this.state;

    return(
      <>
        <div className={stage} id = 'screen' onClick={this.onClickInput} >{message}</div>
        {this.renderResult()}
      </>)
  }
}

export default App;