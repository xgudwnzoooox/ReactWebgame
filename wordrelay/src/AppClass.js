// //class version
import Class, { createRef, PureComponent } from 'react';
import WordRelay from './App';

class WordRelay extends PureComponent{
  state = {
    word : '하몽',
    value : '',
    answer : '',
  }

  inputRef = createRef(null);

  onSubmitInput = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length - 1] === this.state.value[0]){
      this.setState({
        word : this.state.value,
        answer : 'correct'
      })
    }else{
      this.setState({
        answer : 'wrong, try again'
      })

    }
    this.setState({
      value : ''
    })
  }

  onChangeInput = (e) => {
    this.setState({
      value : e.target.value
    })
  }

  render(){
    return(
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitInput}>
          <input ref = {this.inputRef} value = {this.state.value} onChange = {this.onChangeInput} autoFocus />
        </form>
        <div>{this.state.answer}</div>
      </>)
  }
}

export default WordRelay;