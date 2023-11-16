import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

export const BottonNavBar = () => {
  const pages = [
    'SHOP ALL',
    'BEST SELLER',
    'PROTEÍNAS',
    'SUPLEMENTOS',
    'PRE ENTRENOS',
    'ACCESORIOS',
    'BARRAS Y SNACK',
  ];

  return (
    <>
      <nav className='text-main-bg  navbar-expand-lg'>
        <div className='w-100 text-center'>
          <div className='row'>
            <div className='col align-self-center pt-4'>
              <h4 className='text-light'>BRAND</h4>
            </div>
          </div>
          <div className=' d-flex row'>
            <button
              className='mx-auto navbar-toggler '
              type='button'
              data-bs-toggle='collapse'
              data-bs-theme='dark'
              data-bs-target='#navbarNav1'
              aria-controls='navbarNav1'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon p-2 text-body-secondary'></span>
            </button>

            <div className='  collapse navbar-collapse' id='navbarNav1'>
              <ul
                style={{ width: ' 95%' }}
                className='nav justify-content-center'
              >
                {pages.map((content, index) => {
                  return (
                    <li className='nav-item ' key={index}>
                      <a
                        className='nav-link active text-light'
                        aria-current='page'
                        href='#'
                      >
                        {content}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className='nav-item ms-auto'>
                <SearchIcon className='text-white' sx={{ mr: 1 }} />
                <ShoppingCartIcon className='text-white' sx={{ mr: 2 }} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
