import React, { Component } from 'react';
import uuid from 'uuid';

const stateInicial = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '', 
        hora: '', 
        sintomas: ''
    },
    error: ""
}

class NuevaCita extends Component {
    state = { ...stateInicial }

    handleChange = e => {
        this.setState({
            cita : {
                ...this.state.cita, 
                [e.target.name] : e.target.value
             }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        //validar campos no vengan vacios 
        if(mascota === '' || propietario === '' | fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            }); 

            return;
        }

        //generar objeto con los datos
        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid();

        //Agregar la cita al state de la App
        this.props.crearNuevaCita(nuevaCita)

        //reiniciamos state

        this.setState({
            ...stateInicial
        })

    }
    render() {
        const { error } = this.state;
        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Llena el formulario para crear una nuevacita</h2>
                    { error ? <h4 className="text-danger mb-5 mt-2 text-center">Todos los campos son obligatorios</h4> : null}
                    <form
                        onSubmit = {this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label"> Nombre Mascota </label>
                            <div className="col-sm-8 col-lg-10">
<                               input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nanes"
                                    name="mascota"
                                    onChange = {this.handleChange}
                                    value={this.state.cita.mascota}
                                 />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label"> Nombre Dueño </label>
                            <div className="col-sm-8 col-lg-10">
<                               input
                                    type="text"
                                    className="form-control"
                                    placeholder="Charli"
                                    name="propietario"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.propietario}
                                 />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label"> Fecha </label>
                            <div className="col-sm-8 col-lg-4">
<                               input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.fecha}
                                 />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label"> Hora </label>
                            <div className="col-sm-8 col-lg-4">
<                               input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.hora}
                                 />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label"> Sintomas </label>
                            <div className="col-sm-8 col-lg-10">
                             <textarea 
                                className="form-control"
                                name="sintomas"
                                placeholder="Describe los sintomas"
                                onChange = {this.handleChange}
                                value = {this.state.cita.sintomas}
                             ></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <input
                                type="submit"
                                className="btn btn-success"
                                value="Agregar nueva cita"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita; 