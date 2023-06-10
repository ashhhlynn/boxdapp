import { Label, Icon} from 'semantic-ui-react'
import React, { Component } from 'react'

export default class MovieDate extends Component {

    state = { date: 0 }

    componentDidMount = () => {
        let x = localStorage.getItem('date'+ this.props.film.imdbID)
        this.setState({date: x})
    }

    render() {
        return (
            <>
                <Label inverted style={{backgroundColor:"#FFFEEF", color:"black"}}>
                    <h5><Icon name='calendar alternate'></Icon><b>{this.state.date}</b></h5><br></br>
                </Label>
            </>
        )
    }
}
