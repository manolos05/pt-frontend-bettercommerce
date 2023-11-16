import { useEffect, useState } from "react"


export const SelectStore = () => {

    const [ regiones, setRegiones ] = useState([]);
    const [ comunas, setComunas ] = useState([]);

    useEffect(() => {

        try {
            const getFlavorProtien = async () => {
              const res = await fetch("http://127.0.0.1:3333/regions/");
              const data = await res.json();
              setRegiones(data);
            };
            getFlavorProtien();
          } catch (error) {
            console.log("error", error);
          }
          try {
            const getFlavorProtien = async () => {
              const res = await fetch("http://127.0.0.1:3333/comunas/");
              const data = await res.json();
              setComunas(data);
            };
            getFlavorProtien();
          } catch (error) {
            console.log("error", error);
          }
    
    }, [])

   

    return (
        <div className="d-flex ">

            <select className="form-select" aria-label="Default select example" style={{borderColor: '#EB00D3', borderRadius: '30px', fontSize: '10px'}}>
                <option selected>SELECCIONA TU REGION</option>
                {regiones.length !== 0 ? (
                        regiones.map(({ region, identificador}, id ) => (
                            <option value={identificador} className="text-dark" key={id}>{region}</option>
                        ))
                    ) : (
                        <option></option>
                    )} 
            </select>
            <select className="form-select ms-2" aria-label="Default select example" style={{borderColor: '#EB00D3', borderRadius: '30px', fontSize: '10px'}}>
                <option selected>SELECCIONA TU COMUNA</option>
                {comunas.length !== 0 ? (
                        regiones.map(({ comuna, identificador}, id ) => (
                            <option value={identificador} className="text-dark" key={id}>{comuna}</option>
                        ))
                    ) : (
                        <option></option>
                    )} 
            
            </select>
        
        
        
        </div>


    )

}