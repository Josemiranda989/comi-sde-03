import React, { Component } from 'react'

export class StateFullSimpleClass extends Component {
    constructor() {
        super()
        // console.log(this);
        this.state = {
            nombre: "Daniel",
            edad: 15
        }
    }

    render() {
        // const { nombre, edad } = this.state
        return (
            <>
                <h4>Bienvenido <strong>{this.state.nombre}</strong>!</h4>
                {/* <h4>Bievenido <strong>{ {nombre}}</strong>!</h4> */}
                <p>Mi edad es: {this.state.edad}</p>
            </>
        )
    }
}
