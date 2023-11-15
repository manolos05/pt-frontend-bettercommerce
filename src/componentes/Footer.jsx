import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../style/footer.css';

export const Footer = () => {
  return (
    <div className='  '>
      <footer className='text-center text-lg-start '>
        <section className='d-flex bg-main-color align-items-center  justify-content-between p-4'>
          <div className='me-5 fw-bold text-white'>
            <h1 className='fw-bold'>Forma parte de Brand</h1>
            <span>Suscribete a nuestras ofertas y novedades.</span>
          </div>
          <div className='input-container'>
            <input className='mail-input' type='text' />
            <button className='input-button'>Suscribirse</button>
          </div>
        </section>

        <section className=''>
          <div className='container  text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3  col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className=' fw-bold px-1 footer-title'>Puntos de Retiro</h6>

                <p>
                  <LocationOnIcon className='text-main-color' /> Tienda Brand
                  Santiago
                </p>
                <p>
                  <LocationOnIcon className='text-main-color' />
                  Tienda Brand Viña del Mar
                </p>
              </div>

              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className=' fw-bold footer-title'>Servicio al Cliente</h6>

                <p>Seguimiento de pedidos</p>
                <p>Cotización</p>
                <p>Centro de ayuda</p>
                <p>Preguntas frecuentes</p>
                <p>Cambios y devoluciones</p>
                <p>Información de reservas</p>
                <p>Información de reservas</p>
              </div>

              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className=' fw-bold footer-title'>Mi cuenta</h6>

                <p>Ingresa o regístrate</p>
                <p>Ingresa o regístrate</p>
                <p>Ingresa o regístrate</p>
                <p>Direcciones</p>
              </div>

              <div className='col-md-2 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4'>
                <h6 className=' fw-bold footer-title'>Sobre Nosotros</h6>

                <p>Quiénes somos</p>
                <p>Tiendas</p>
                <p>Blog</p>
              </div>
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className=' fw-bold footer-title'>Contactanos</h6>

                <p>
                  <WhatsAppIcon className='text-main-color ' /> +56 9 9999 9999
                </p>
                <p>
                  <MessageOutlinedIcon className='text-main-color' /> ¿Necesitas
                  Ayuda?
                </p>
                <p>
                  Lunes a viernes 08:30 - 18:30
                  <br /> Sábado de 10:00 - 14:00 <br /> Domingo de 13:30 - 14:00
                </p>
                <h6 className=' fw-bold footer-title'>Servicio al Cliente</h6>
                <div className='text-main-color'>
                  <FacebookIcon />
                  <WhatsAppIcon
                    sx={{
                      mx: 1,
                    }}
                  />
                  <InstagramIcon />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='d-flex p-5 justify-content-between '>
          <span> Términos y condiciones</span>{' '}
          <span> Brand © Todos los derechos reservados</span>
        </div>
      </footer>
    </div>
  );
};
