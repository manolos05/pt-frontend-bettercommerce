import Carousel from 'react-multi-carousel';
import { ProductCard } from './ProductCard';
import { responsive } from './responsiveData';
import { CustomButtomLeft } from './CustomButtomLeft';
import { CustomButtonRight } from './CustomButtonRight';

import '../../style/carrousel.css';
import 'react-multi-carousel/lib/styles.css';

export const Carrousel = () => {
  return (
    <>
      <h1
        style={{
          color: '#4D525C',
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Carousel>
      </div>
    </>
  );
};
