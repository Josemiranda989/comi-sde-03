import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment = () => {
        // console.log('hiciste click');
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <>
                <h3>Hiciste {this.state.count} veces click!</h3>
                <button onClick={this.increment}>Hacé click aquí</button>
            </>
        )
    }
}
