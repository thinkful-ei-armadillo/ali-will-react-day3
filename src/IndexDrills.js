import React from 'react';



// ================ HELLO DRILL ======================
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

// ================ BOMB DRILL ======================
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


// ================ ROULETTE DRILL ======================
class Roulette extends React.Component {
    static defaultProps  = {
        bulletInChamber: 8
    };

    state = {
        chamber: null,
        spinningTheChamber: false
    };


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
        // const { chamber, spinningTheChamber } = this.state
        // const { bulletInChamber } = this.props
        if (this.state.spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (this.state.chamber === this.props.bulletInChamber) {
          return '<h2>BANG!!!!</h2>'
        } else {
          return `You're alive for now`
        }
      }

      componentWillUnmount() {
        clearTimeout(this.timeout)
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




class Accordion extends React.Component {
    static defaultProps = {
        sections: [{
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            title: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
          },
          {
            title: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
          }]
    }
    state = { 
        currentIndex: 0
    }

    // update the state with new index
    handleClick = (index) =>  {
        this.setState({ currentIndex: {index}})
        console.log(index);
    }

    render() {
        const currentSection = this.props.sections[this.state.currentIndex]
        const listItem = this.props.sections.map((sections, index) => (
            <li><button key={index} onClick={this.handleClick(index)}>
                <p>{sections.title}</p>
                </button>       
            </li>
        ))

        return (
            <ul className='accordion' id='root'>
                {listItem}
                <p>{currentSection.content}</p> 
            </ul>
        )
    }
}

export default Accordion;


