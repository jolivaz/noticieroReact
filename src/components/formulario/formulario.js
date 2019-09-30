import React, { Component } from 'react'

class Formulario extends Component{
    state = {
        categoria: 'general'
    }
    handleChangeCategory = e => {

        //seteamos el estado y al setearlo hacemos un callback para que ejecute directo
        // la funcion de consultar
        
        this.setState({
            categoria: e.target.value
        }, () => this.props.consularNoticias(this.state.categoria))



    }
    render(){
        return(
            <div className="buscador row">
                <div className="col s12 mx-auto offset-2">
                    <form>
                        <h4 className="title-page">Lista de Categorias</h4>
                        <div className="input-field col s12 m8 mx-2">
                            <select onChange={this.handleChangeCategory}>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertaiment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Formulario;