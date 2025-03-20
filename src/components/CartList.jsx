import ListGroup from 'react-bootstrap/ListGroup'
import CloseButton from 'react-bootstrap/CloseButton'

function CartList({ cart }) {
    return (
        <ListGroup as="ol" numbered className='w-50 mt-5'>
            {cart.map(prod => (
                <ListGroup.Item key={prod.id} className='d-flex justify-content-between productosCarrito'>
                    <img className='foto' src={prod.thumbnail} alt="" /> {prod.title} 🛒{prod.quantity} 
                    <p className='anuncioGratis'>Envío gratis a todo el país</p><CloseButton />
                </ListGroup.Item>       
            ))}         
        </ListGroup>
    )
}

export default CartList