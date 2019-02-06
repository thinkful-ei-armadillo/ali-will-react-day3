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
    static defaultProps  = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false
    };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
            })}, 2000)
      }
    
    // handler for trigger functionality
    handleTrigger = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            console.log(randomChamber);
    
        this.setState(
            {
                chamber : randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
          return 'BANG!!!!!'
        } else {
          return `SAFE!`
        }
      }

    render() {
        return (
        <div className='Roulette' id='root'>
            <p>{this.renderDisplay()}</p>
            <button onClick={this.handleTrigger}>Pull the trigger</button>
        </div>
        )
    }
}




export default Roulette;
