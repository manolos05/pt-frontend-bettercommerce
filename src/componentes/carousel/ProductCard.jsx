import img from './carouselImg.png';
import '../../style/product-card.css';

export const ProductCard = ({brand, product_name,  price, discount}) => {
  return (
    <div className='card text-start border-0'>
      {' '}
      <img src={img} alt='' />
      <small style={{ fontSize: '12px' }} className='mt-3 fw-light'>
        {brand}
      </small>
      <p>{product_name}</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h2 className='d-inline text-main-color mr-1'>{discount}</h2>{' '}
        <span className='text-decoration-line-through '>{price}</span>
      </div>
      <div className='free-shiping '>ENVIO GRATIS STGO</div>
    </div>
  );
};
