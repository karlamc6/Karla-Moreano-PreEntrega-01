import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'
/* import { withLoading } from '../hoc/withLoading' */


function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const todosLosProductos = 'https://dummyjson.com/products'
        const productosPorCategoria = `https://dummyjson.com/products/category/${id}`

        fetch(id? productosPorCategoria : todosLosProductos)
            .then(res => res.json())
            .then(res => setItems(res.products))
    }, [id])

    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer