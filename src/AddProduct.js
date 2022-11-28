import { Component } from "react";

export default class AddProduct extends Component{
    state = {
		nombre: '',
		unidades: '',
        precio:''
	};

    onChangeInput = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

    onSave = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log(e)
        this.props.onSave({ nombre: this.state.nombre, unidades: this.state.unidades, precio:this.state.precio });
		this.setState({ nombre: '', unidades: '',precio:'' });

    }
    render(){
        const { nombre, unidades,precio } = this.state;
        return(
             <div>
            <h3>Añadir producto</h3>
            <form onSubmit={this.onSave}>
            <label>Nombre</label>
            <input type="text" id="nombre" value={nombre} onChange={this.onChangeInput} name="nombre"></input>    
            
            <label>Unidades</label>
            <input type="number" id="unidades" value={unidades} onChange={this.onChangeInput}  name="unidades"></input>    
            
            <label>Precio</label>
            <input id="precio"  value={precio} type="number" onChange={this.onChangeInput} name="precio"></input>    
            <hr/>
            <input type="submit" value="Añadir producto"></input>
            </form>
        </div>
            
        );
       
    }
}