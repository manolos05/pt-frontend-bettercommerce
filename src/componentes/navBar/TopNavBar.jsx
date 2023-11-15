import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const TopNavBar = () => {

    const pages = [
        {
          text: 'Inicia Sesion',
          icon: <PersonIcon />
        },
        {
          text: 'Seguimiento',
          icon: <LocalShippingIcon />
        },
        {
          text: 'Tiendas',
          icon: <ShoppingBagIcon />
        }
      ];


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black">

        

                <div className="container-fluid d-flex">
                    <div className="justify-content-end"> 
                    <p className="text-light">15% OFF EN TODO CON EL CODIGO: XX15OFF</p>
                    </div>
                
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-theme="dark" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon p-2 text-body-secondary"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link active text-light" aria-current="page" href="#">
                                <PersonIcon />
                                Iniciar Sesión
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">     
                                <LocalShippingIcon />
                                Seguimiento
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">
                                     <ShoppingBagIcon />
                                     Tienda
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </>


    )
}