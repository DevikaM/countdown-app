import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline)
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());

        const seconds = Math.floor((time/1000)%60),
                minutes = Math.floor((time/1000/60)%60),
                hours = Math.floor(time/(1000*60*60)%24),
                days = Math.floor(time/(1000*60*60*24));

        this.setState({days, hours, minutes, seconds })
    }

    formatNumber(number) {
            return number < 10 ? '0' + number : number
    }

    render() {
        return (
            <div>
                <div className="Clock-days">{this.formatNumber(this.state.days)} Days</div>
                <div className="Clock-hours">{this.formatNumber(this.state.hours)} Hours</div>
                <div className="Clock-minutes">{this.formatNumber(this.state.minutes)} Minutes</div>
                <div className="Clock-seconds">{this.formatNumber(this.state.seconds)}  Seconds</div>
            </div>
        )
    }
}

export default Clock;