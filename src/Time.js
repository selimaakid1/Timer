import React, { Component } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button'

class Time extends Component {
    constructor(props) {

        super(props)
        this.state = {
            count: 0,
            inter: false
        }
        setInterval(() => {
            this.state.inter && this.setState({ count: (this.state.count + 1000) })
        }, 1000)
    }
    start = () => {
        if (!this.state.inter) {
            this.setState({
                inter: true
            })
        } else {
            this.setState({ inter: false })
        }
    }
    reset = () => {
        this.setState({ count: 0, inter: false })
    }
   
    render() {
        const { count } = this.state
        var milliseconds = parseInt((count % 1000) / 100)
        var seconds = parseInt((count / 1000) % 60)
        var minutes = parseInt((count / (1000 * 60)) % 60)
        var hours = parseInt((count / (1000 * 60 * 60)) % 24)
        hours = (hours < 10) ? '0' + hours : hours
        minutes = (minutes < 10) ? '0' + minutes : minutes
        seconds = (seconds < 10) ? '0' + seconds : seconds

        return (<div className='timeContainer'>
            <div className='timeContainer1'>
                <div className='timeNumbers'>
                    {hours} : {minutes} : {seconds}
                </div>
                <div className='timeTextContainer'>
                    <div className='timeText'>Hour</div>
                    <div className='timeText'>Minute</div>
                    <div className='timeText'>Second</div>
                </div>
                <div className='timeButton'>
                    <Button variant="outline-success" className='startBtn'onClick={this.start}>Start</Button>
                    <Button variant="outline-dark" className='resetBtn' onClick={this.reset}>Reset</Button>
                </div>
            </div>
        </div>

        )

    }
}




export default Time;