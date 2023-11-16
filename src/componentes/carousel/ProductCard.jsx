import img from './carouselImg.png';
import '../../style/product-card.css';

export const ProductCard = ({brand, product_name,  price, discount, id}) => {

  const percentajeDiscount = (price * discount) / 100;
  const finalPrice = price - percentajeDiscount;
  const formatedPrice = finalPrice.toLocaleString('en');

  

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
        <h2 className='d-inline text-main-color mr-1'>${ formatedPrice }</h2>{' '}
        <span className='text-decoration-line-through '>${price.toLocaleString('en')}</span>
      </div>
      <div className='free-shiping '>ENVIO GRATIS STGO</div>
    </div>
  );
};
