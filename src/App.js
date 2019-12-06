import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCItas';

class App extends Component {
  state  = {
    citas: []
  }
  //cuando la aplicación carga 
  componentDidMount() {
    const citasGuardadas = JSON.parse(sessionStorage.getItem("citas")); 
    if ( citasGuardadas != null ) {
        const citas = (citasGuardadas.length > 0) ? [...citasGuardadas] : null 
        if (citas != null ) {
          this.setState({
            citas
          })
        }
    }
  }

  componentDidUpdate() {
    sessionStorage.setItem("citas", JSON.stringify(this.state.citas))
  }

  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos]
    //Agregar al nuevo state 
    this.setState({
      citas 
    })
  }

  eliminarCita = id => {
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(cita => cita.id != id);
    this.setState({
      citas 
    })
  }

  crear
  render() {
    return(
      <div className="container">
        <Header
        title="Administrador Pacientes Veterinaria"
        />
        <div className="row">
          <div className="col-md-10 m-auto">
            <NuevaCita
              crearNuevaCita = {this.crearNuevaCita}
            />
          </div>
          <div className="col-md-10 m-auto mt-5">
            <ListaCitas 
              citas = {this.state.citas}
              eliminarCita = {this.eliminarCita}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
