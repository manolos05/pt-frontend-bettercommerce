import img from './carouselImg.png';
import '../../style/product-card.css';

export const ProductCard = () => {
  return (
    <div className='card text-start border-0'>
      {' '}
      <img src={img} alt='' />
      <small style={{ fontSize: '12px' }} className='mt-3 fw-light'>
        Brand
      </small>
      <p>Shaker Brand 400cc</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h2 className='d-inline text-main-color mr-1'>$7.990</h2>{' '}
        <span className='text-decoration-line-through '>$9.990</span>
      </div>
      <div className='free-shiping '>ENVIO GRATIS STGO</div>
    </div>
  );
};
