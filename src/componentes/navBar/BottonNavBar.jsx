import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';



export const BottonNavBar = () => {


    const pages = ['SHOP ALL', 'BEST SELLER', 'PROTEÍNAS', 'SUPLEMENTOS', 'PRE ENTRENOS', 'ACCESORIOS', 'BARRAS Y SNACK']



    return (
        <>
            <nav className="hola  navbar-expand-lg">
                <div className="container text-center">
                    <div className="row">
                        <div className="col align-self-center pt-4">
                            <h4 className="text-light">BRAND</h4>
                        </div>
                    </div>
                    <div className="row">
                        <button className="navbar-toggler justify-content-start" type="button" data-bs-toggle="collapse" data-bs-theme="dark" data-bs-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon p-2 text-body-secondary"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav1">
                            <div className="collapse navbar-collapse" id="navbarNav1">

                                <ul className="nav justify-content-center">
                                    {
                                        pages.map((content, index) => {
                                            return (
                                                <li className="nav-item " key={index}>
                                                    <a className="nav-link active text-light" aria-current="page" href="#">
                                                        {content}
                                                    </a>

                                                </li>
                                            );
                                        })

                                    }

                                </ul>
                                <div className="nav-item text-ligth">
                                    <ShoppingCartIcon />
                                    <SearchIcon />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </nav>
        </>


    )
}