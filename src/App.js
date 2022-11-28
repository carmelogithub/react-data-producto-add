//import logo from './logo.svg';
import { Component } from 'react';
import AddProduct from './AddProduct';
import './App.css';
import Producto from './Producto'

class App extends Component {
  //datos que pueden venir de una API
  state={
productos:[
    {"nombre":"camisa","unidades":15,"precio":9.95},
    {"nombre":"chaqueta","unidades":45,"precio":20.94},
    {"nombre":"pantalón","unidades":55,"precio":12},
    {"nombre":"sombrero","unidades":55,"precio":9.95}
  ]
  };  
  

  addProducto = ( producto ) => {
    console.log(producto);
    this.setState({
      productos: this.state.productos.concat([producto])
    })
    console.log(this.state.productos);
  };


  render(){
  return (
    <div className="App">
      <h2>Listado de productos</h2>
      <AddProduct onSave={this.addProducto} />
      {this.state.productos.map(producto => <Producto nombre={producto.nombre} unidades={producto.unidades} precio={producto.precio} />)}
    </div>
  );
}
}

export default App;
