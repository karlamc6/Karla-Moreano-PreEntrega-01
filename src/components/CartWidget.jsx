import iconoImg from '../imagenes/carrito-de-compras.png'

function CartWidget () {
    return (
        <div className='carritoDeCompras'>
            <img src={iconoImg} alt="" />  
            <p>0</p>
        </div>
        
    )
}

export default CartWidget