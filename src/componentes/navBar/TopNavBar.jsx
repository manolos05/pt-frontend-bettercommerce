import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const TopNavBar = () => {
  return (
    <>
      <nav className='navbar py-0 navbar-expand-lg bg-black'>
        <div className='container-fluid d-flex'>
          <div className=' m-0  p-0 align-middle text-light justify-content-end'>
            <p className='text-light m-0 text-center d-md-none d-block  p-0 align-middle'>
              15% OFF EN TODO CON EL CODIGO: XX15OFF
            </p>
            <p className='text-light m-0 d-none d-md-block  p-0 align-middle'>
              15% OFF EN TODO CON EL CODIGO: XX15OFF
            </p>
          </div>

          <button
            className='mx-auto navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-theme='dark'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon p-2 text-body-secondary'></span>
          </button>

          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              <li className='nav-item '>
                <a
                  className='nav-link active d-flex text-light'
                  aria-current='page'
                  href='#'
                >
                  <PersonIcon sx={{ mr: 1 }} />
                  Iniciar Sesión
                </a>
              </li>
              <li className='border nav-item border-light my-2 d-none d-md-block'></li>
              <li className='nav-item  '>
                <a className='nav-link active d-flex text-light' href='#'>
                  <LocalShippingIcon sx={{ mr: 1 }} />
                  Seguimiento
                </a>
              </li>
              <li className='border nav-item border-light my-2  d-sx-none d-none d-md-block'></li>
              <li className='nav-item'>
                <a className='nav-link d-flex active text-light' href='#'>
                  <ShoppingBagIcon sx={{ mr: 1 }} />
                  Tienda
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
