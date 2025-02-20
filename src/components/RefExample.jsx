import {useRef} from 'react'

function RefExample () {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus()
    }

    const handleChange = () => {
        console.log(inputRef.current.value)
    }

    return (
        <>
            <input 
                placeholder="escribe acá..." 
                ref = {inputRef}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Click to focus</button>
        </>
    )
}

export default RefExample