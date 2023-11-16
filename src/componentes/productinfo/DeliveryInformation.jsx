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

            <div className="d-flex justify-content-start">
                <button type="button" className="btn btn-light-primary shipselect">
                    <LocalShippingOutlinedIcon />
                        Despacho a domicilio
                    <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                </button>

                <button type="button" className="btn btn-light-primary shipselect ms-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <StorefrontOutlinedIcon />
                Retiro en tienda GRATIS  
                <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                </button>
           
            </div>


            {/* <!-- Modal --!> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <StorefrontOutlinedIcon style={{color: '#EB00D3'}}/>
                                <h1 className="modal-title fs-5" id="exampleModalLabel" style={{color: '#EB00D3'}}>
                                    Retiro en Tienda GRATIS
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <SelectStore />
                            </div>
                            <div className="modal-footer">
                              Tiendas Disponibles:
                              <br />
                            </div>
                        </div>
                    </div>
                </div>



        </div>
        </>

    )

}