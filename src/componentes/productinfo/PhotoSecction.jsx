import photo from './pictures/imgwhey.png'


export const PhotoSecction = () => {


    return (
        <>
            <div className="mt-4 ms-4 ps-4 pt-4">

                <p> INICIO / PROTEINAS / WHEY PROTIEN </p>

                <div className="d-flex mt-4 pt-4">
                <img src={photo} className="img-fluid" alt="wheyprotien" />
                </div>
                <div className="row mt-2">
                    <div className="col-4"> <img src={photo} className="img-fluid" alt="wheyprotien" /></div>
                    <div className="col-4"> <img src={photo} className="img-fluid" alt="wheyprotien" /></div>
                    <div className="col-4"><img src={photo} className="img-fluid" alt="wheyprotien" /></div>
                </div>

            </div>
        </>
    )
}