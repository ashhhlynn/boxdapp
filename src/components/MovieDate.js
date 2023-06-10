import { Button, Label} from 'semantic-ui-react'
import React, { Component } from 'react';

export default class MovieDate extends Component {
    state = { date: 0 }

    componentDidMount = () => {
        let x = localStorage.getItem('date'+ this.props.film.imdbID)
        this.setState({date: x})
    }

    render() {
        const { date } = this.state
        return (
            <div>
                <Label style={{backgroundColor:"#FFFEEF", color:"black"}}>
                    <h3><b>{date}</b></h3>
                </Label>
            </div>
        )
    }
}
