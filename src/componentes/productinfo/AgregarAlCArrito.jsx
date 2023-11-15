import { useState } from "react"


export const AgregarAlCarrito = () => {

    const [ count, setCount ] = useState(0)

    return (
        <>
        <div>
        <button type="button" class="btn btn-secondary">+</button>
        <button type="button" class="btn btn-secondary">-</button>
        </div>
        
        
        
        </>


    )

}