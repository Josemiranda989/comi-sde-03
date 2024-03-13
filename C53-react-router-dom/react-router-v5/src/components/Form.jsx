import React, { Component } from 'react'

export class Form extends Component {
    constructor() {
        super()
        this.state = {
            nombre: ""
        }
    }

    handleSubmit = (event) => {
        alert('Se envio el nombre: ' + this.state.nombre)
        event.preventDefault()
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            nombre: event.target.value,
            prueba: "Esto es un nuevo estado"
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nombre <input
                            value={this.state.nombre}
                            onChange={this.handleChange}
                            type="text"
                            placeholder='deadpool, batman...' />
                    </label>
                    <button type='submit'>Enviar info</button>
                </form>
                <h2>El Formulario recibio el nombre: {this.state.nombre}</h2>
                <p>{this.state?.prueba}</p>
            </>
        )
    }
}
