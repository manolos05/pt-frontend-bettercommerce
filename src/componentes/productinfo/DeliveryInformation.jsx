import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { SelectStore } from './SelectStore';

export const DeliveryInformation = () => {
  return (
    <>
      <div>
        <div>
          <p>Tipo de entrega</p>
        </div>

        <div className='d-flex  justify-content-start'>
          <button
            type='button'
            className='btn d-flex btn-light-primary shipselect'
          >
            <LocalShippingOutlinedIcon
              className='text-main-color'
              sx={{ mr: 1 }}
            />
            Despacho a domicilio
            <input
              className='form-check-input ms-2'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault1'
            />
          </button>

          <button
            type='button'
            className='btn btn-light-primary d-flex shipselect ms-4'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            <StorefrontOutlinedIcon
              className='text-main-color'
              sx={{ mr: 1 }}
            />
            Retiro en tienda GRATIS
            <input
              className='form-check-input ms-2'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault1'
            ></input>
          </button>
        </div>

        {/* <!-- Modal --!> */}
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-lg modal-dialog-centered'>
            <div className='modal-content px-3'>
              <div className='modal-header border-0 '>
                <h1
                  className='modal-title w-100 fw-bolder text-center fs-5 text-main-color'
                  id='exampleModalLabel'
                >
                  <StorefrontOutlinedIcon sx={{ color: '#EB00D3', mr: 1 }} />
                  Retiro en Tienda GRATIS
                </h1>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div className='modal-body d-flex align-items-center'>
                <SelectStore />
              </div>
              <hr className='modal-hr' />
              <div
                className='h-25 px-3 mt-3'
                // style={{
                //   height: '90px',
                // }}
              >
                Tiendas Disponibles:
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};