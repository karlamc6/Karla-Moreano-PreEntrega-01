import { useCart } from '../context/cartContext'
import CartList from './CartList'

function CartContainer() {
    const {cart} = useCart()

    if (cart.length === 0) {
        return(
            <p>Aún no has comprado nada 😥</p>
        )
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='mt-1 tituloCart'>Carrito</div>
            <CartList cart={cart} />           
        </div>
    )
}

export default CartContainer