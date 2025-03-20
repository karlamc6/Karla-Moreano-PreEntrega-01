import iconoImg from '../imagenes/carrito-de-compras.png'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { useCart } from '../context/cartContext'
import { useNavigate } from 'react-router'

function CartWidget() {
    const {getQuantity} = useCart()
    const total = getQuantity()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/Cart')
    }

    return (
        <Button variant="tertiary" onClick={handleClick}>
            <img src={iconoImg} alt="" /> <Badge bg="secondary">{total}</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    )
}

export default CartWidget