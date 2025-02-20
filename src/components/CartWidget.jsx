import iconoImg from '../imagenes/carrito-de-compras.png'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

function CartWidget() {
    return (
        <Button variant="tertiary">
            <img src={iconoImg} alt="" /> <Badge bg="secondary">0</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    )
}

export default CartWidget