import React, { Component } from 'react'

export class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='card'>
                <h4>{this.props.title}</h4>
                <img src={this.props.img} alt="imagen-anime" />
            </div>
        )
    }
}
