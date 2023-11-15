import { AgregarAlCarrito } from "./AgregarAlCArrito"
import { FlavorProtein } from "./FlavorProtein"



export const InformationSection = () => {

    const description = ' Exclusiva fórmula proteica a base de suero de leche aislado e hidrolizado que ha sido cientificamente diseñada para construir músculo magro libre de grasa, aumentar la fuerza y mejorar el rendimiento deportivo. Cada porción contiene 30 g de proteína y una matriz de aminoacidos de cadena ramificada, glutamina y creatina para acelerar el aumento de musculo y la fuerza'

    return (
        <>

            <div className="mt-4 pt-4">
                <p> BRAND </p>
                <div className="">
                    <h4>Whey Protein - Original </h4>
                </div>
            </div>
            <div className="d-flex justify-content-start">
                <p className="hola btn text-light" disabled>-%5</p>
                <h2 className="hola1 ps-2 ms-1"> $68.390 </h2>
                <p className="text-decoration-line-through ps-2 ps-4 fs-5 fw-medium text-secondary"> $71.990 </p>
            </div>

            <div className='free-shiping '>ENVIO GRATIS STGO</div>
            <p className="mt-4 pt-4"> SKU158023425509 </p>
            <div className="description">
            <p className="p-2">{description}</p>
            </div>

            <p> Sabor: </p>

            <FlavorProtein />

            <AgregarAlCarrito />


        </>

    )



}