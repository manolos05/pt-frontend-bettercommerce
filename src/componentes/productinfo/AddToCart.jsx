import { useState } from "react"


export const AddToCart = () => {

    const [ count, setCount ] = useState(0)

    const increaseCount = () => {
        setCount(count + 1);
      };
    
      const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
          }
      };

    return (
        <>
        <div className="mt-4 pt-4  mb-4 d-flex justify-content-start">
        <button type="button" className="btn btn-secondary text-dark buttonCart" onClick={decreaseCount}>-</button>
        <div style={{
            marginTop: '15px',
            display: 'flex',
            backgroundColor: '#D9D9D9',
            margin: '5px',
            width: '218px',
            borderRadius: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            height:'20px'
        }}> {count} 
        </div>
        <button type="button" className="btn btn-secondary text-dark buttonCart" onClick={increaseCount}>+</button>
        <button type="button" className="btn btn-secondary ms-4 addcart">Agregar al carrito</button>
        </div>
        
        
        
        </>


    )

}