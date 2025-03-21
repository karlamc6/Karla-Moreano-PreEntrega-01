import { useState } from "react"
import { useContext } from "react"
import { cartContext } from "../context/cartContext"


function ItemCount ({ product }) {
    const [count, setCount] = useState(0)
    const {addToCart} = useContext(cartContext)

    const handleAdd = () => {
        setCount (count + 1)
    }

    const handleRestar = () => {
        setCount (count - 1)
    }

    const handleAddToCart = () => {
        addToCart({...product, quantity: count})
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRestar}>-</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount