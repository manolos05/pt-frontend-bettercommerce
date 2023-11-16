import { AddToCart } from "./AddToCart"
import { DeliveryInformation } from "./DeliveryInformation"
import { FlavorProtein } from "./FlavorProtein"



export const InformationSection = () => {

    const description = ' Exclusiva fórmula proteica a base de suero de leche aislado e hidrolizado que ha sido cientificamente diseñada para construir músculo magro libre de grasa, aumentar la fuerza y mejorar el rendimiento deportivo. Cada porción contiene 30 g de proteína y una matriz de aminoacidos de cadena ramificada, glutamina y creatina para acelerar el aumento de musculo y la fuerza'

    return (
        <>

<div className='mt-4 pt-4'>
        <p> BRAND </p>
        <div className=''>
          <h1 style={{ color: '#4D525C' }} className='fw-bolder'>
            Whey Protein - Original{' '}
          </h1>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-start'>
        <span className='discount text-light' disabled>
          -%5
        </span>
        <h2 className='text-main-color fw-bolder align-center m-0 ms-2 p-0 text-center'>
          {' '}
          $68.390{' '}
        </h2>
        <p className='text-decoration-line-through m-0 align-middle ps-2 ps-4 fs-4 fw-medium text-secondary'>
          {' '}
          $71.990{' '}
        </p>
      </div>

      <button className='enviobtn'>ENVIO GRATIS STGO</button>
            <p className="mt-4 pt-4"> SKU158023425509 </p>
            <div className="description">
            <p className="p-2">{description}</p>
            </div>

            <p> Sabor: </p>

            <FlavorProtein />
            <AddToCart />
            <DeliveryInformation />


        </>

    )



}