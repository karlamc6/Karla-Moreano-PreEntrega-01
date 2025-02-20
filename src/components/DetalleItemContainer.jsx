import { useState, useEffect } from "react"
import { useParams } from "react-router"

function DetalleItemContainer() {
    const [detalle, setDetalle] = useState()
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
         .then(res => res.json())
         .then(res => setDetalle(res))
    }, [id])

    

    return (
        <div>
            <p>{detalle?.title}</p>
            <p>{detalle?.description}</p>
            <p>$ {detalle?.price}</p>
            <p>{detalle?.category}</p>
            <img src={detalle?.thumbnail} alt="" />
            
        </div>
    ) 
}

export default DetalleItemContainer