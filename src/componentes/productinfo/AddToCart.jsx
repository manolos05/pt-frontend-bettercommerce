import { useState } from 'react';

export const AddToCart = () => {
  const [count, setCount] = useState(0);

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
      <div className='mt-4 pt-4  mb-4 d-flex justify-content-start align-items-center'>
        <div className='d-flex align-items-center'>
          <button
            type='button'
            className='btn  text-dark buttonCart'
            onClick={decreaseCount}
          >
            -
          </button>
          <div className='counter'> {count}</div>
          <button
            type='button'
            className='btn  text-dark buttonCart'
            onClick={increaseCount}
          >
            +
          </button>
        </div>

        <button type='button' className='btn btn-secondary ms-4 addcart'>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};