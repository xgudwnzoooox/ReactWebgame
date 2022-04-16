import Class, { Component } from 'react';

class Try extends Component{
  render(){
    const { result, index } = this.props;
    return(
        <li>{index}번째 시도 : {result[0]} strike, {result[1]} ball </li>
      );
  }
}

// class Try extends Component {
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo[0]}</div>
//         <div>{tryInfo[1]}</div>
//       </li>
//     );
//   }
// }


export default Try;