import React, { Component } from 'react';
import Clock from './clock';
import './App.css'
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'July 14, 2019',
            newDeadline: ''
        }
    }

    changeDeadline = () => {

        if(isNaN(Date.parse(this.state.newDeadline))){
            alert('Invalid Date: use format mmm dd, yyyy')
            this.setState({newDeadline: ''})
            return;
        }
        this.setState({deadline: this.state.newDeadline})
    }

    render(){
        return (
            <div className="App">
                <div className="App-title"> Countdown to {this.state.deadline}</div>
                <Clock
                    deadline={this.state.deadline}
                />
                <Form inline>
                    <FormControl
                        className="Deadline-input"
                        placeholder={'new date'}
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <Button onClick={() => this.changeDeadline()}>submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;