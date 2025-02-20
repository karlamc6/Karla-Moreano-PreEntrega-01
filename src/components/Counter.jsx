import { useEffect, useState } from "react"

function Counter () {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('el componente se montó')
        return () => {
            console.log('se desmontó')
        }
    }, [count])

    //[] se va a ejecutar una vez en el montaje
    //[a,b,c,..] se va a ejecutar en el montaje y cuando se actualicen

    const handleAdd = () => {
        setCount (count + 1)
    }

    const handleRestar = () => {
        setCount (count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRestar}>-</button>
        </div>
    )
}

export default Counter