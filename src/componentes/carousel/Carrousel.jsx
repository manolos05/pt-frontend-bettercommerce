import Carousel from 'react-multi-carousel';
import { ProductCard } from './ProductCard';
import { responsive } from './responsiveData';
import { CustomButtomLeft } from './CustomButtomLeft';
import { CustomButtonRight } from './CustomButtonRight';

import '../../style/carrousel.css';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';

export const Carrousel = () => {

    const URL = import.meta.env.VITE_URL

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
      try{
        const getProducts = async () => {
          const res = await fetch(`${URL}/productos`);
          const data = await res.json();
          setProducts(data);
        };
        getProducts();
      }
      catch(error){
        console.log(error)
      }

    }, [])

    

  return (
    <>
      <h1
        style={{
          color: '#4D525C',
          textAlign: 'center',
          marginTop: '10px'
        }}
      >
        {' '}
        TE PODRÍA INTERESAR TAMBIÉN{' '}
      </h1>
      <div className='container position-relative py-5 '>
        <Carousel
          infinite
          responsive={responsive}
          customLeftArrow={<CustomButtomLeft />}
          containerClass='container'
          customRightArrow={<CustomButtonRight />}
        >

          {
            products.length !== 0 ? (
              products.map(({brand, product_name,  price, discount, id}) =>
              <ProductCard 
                key={id}
                brand={brand}
                product_name={product_name}
                price={price}
                discount={discount.toLocaleString()}
              
              />
              ) 
            ) : (<div></div>)
          }
        
          
        </Carousel>
      </div>
    </>
  );
};
