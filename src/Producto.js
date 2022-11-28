const Producto = props => {//atributos
    const {nombre, unidades,precio} = props;
	return (
            <div>
                <h3>Producto </h3>
                <p>Nombre producto {nombre}</p>
                <p>Unidades producto {unidades}</p>
                <p>Precio producto {precio}</p>
                <p>Total {unidades*precio}</p>
                <hr />
            </div>
    )
}
export default Producto;