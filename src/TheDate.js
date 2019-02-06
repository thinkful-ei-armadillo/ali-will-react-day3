import React from 'react';


class TheDate extends React.Component {
    constructor(props) {
    super(props)
    this.state = {datetime: new Date()};
  }

componentDidMount() {
    this.interval = setInterval(() => {
        this.setState({
            datetime: new Date()      
    })}, 1000)
}
componentWillUnmount() {
    clearInterval(this.interval)
} 

  render() {
        console.log(this.state)
        return (
            <div>{this.state.datetime.toLocaleString()}</div>
        )
    
}
}

class Counter extends React.Component {
    state = {
        count: 0
      };
      handleButtonClick = () => {
        const newCount = this.state.count + 1;
        this.setState({
            count: newCount
          })
      }
      render() {
        return (
          <div>
            <p>The current count: {this.state.count}</p>
            <button onClick={this.handleButtonClick}>
              Add 1
            </button>
          </div>
        )
      }}

// export default TheDate;
export default Counter;

