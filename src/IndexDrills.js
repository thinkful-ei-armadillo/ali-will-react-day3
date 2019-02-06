import React from 'react';


class Hello extends React.Component {
    state = {
        who: 'world'
    };


render() {
    return (
        <div id='root'>
            <p>Hello, {this.state.who} </p>
            <button onClick={() => this.setState({ who: 'world' })}>World</button>
            <button onClick={() => this.setState({ who: 'react' })}>React</button>
            <button onClick={() => this.setState({ who: 'friend' })}>Friend</button>
        </div>
    )
}
}

class Bomb extends React.Component {
        state = {
        count: 0,

    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: (this.state.count >= 8) ? 0 : this.state.count + 1, 
        })}, 1000)
      }

    render() {
        let message = (this.state.count >= 8) ? 'BOOM!!!': ((this.state.count % 2) ? 'tick':'tock')
        return  (
                <div id='root'>
                    <p>{this.state.count}: {message}</p>
                </div>)
    }
}

class Roulette extends React.Component {
}



export default Roulette;
