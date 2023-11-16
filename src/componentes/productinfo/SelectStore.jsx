import { useEffect, useState } from "react"


export const SelectStore = () => {

    
    const URL = import.meta.env.VITE_URL

    const [ regiones, setRegiones ] = useState([]);
    const [ comunas, setComunas ] = useState([]);

    const [ idComuna, setIdComuna ] = useState("")

    const getComuna = async () => {
        const res = await fetch(`${URL}/comunas?txtBuscar=${idComuna}`);
        const data = await res.json();
        setComunas(data);
    }

    useEffect(() => {

        try {
            const getRegiones = async () => {
              const res = await fetch(`${URL}/regions/`);
              const data = await res.json();
              setRegiones(data);
            };
            getRegiones();
          } catch (error) {
            console.log("error", error);
          }
          
    
    }, [])

    useEffect(() => {
        if (idComuna !== "") {
            try {
                getComuna()
            }
            catch(error){
                console.log(error)
            }
           
        }
       
    }, [idComuna])


    return (
        <div className="d-flex  w-100">

            <select className="form-select" aria-label="Default select example" style={{borderColor: '#EB00D3', borderRadius: '30px', fontSize: '10px', height: '44px'}} onChange={(e) => setIdComuna(e.target.value) }>
                <option selected>SELECCIONA TU REGION</option>
                {regiones.length !== 0 ? (
                        regiones.map(({ region, identificador}, id ) => (
                            <option value={identificador} className="text-dark" key={id}>{region}</option>
                        ))
                    ) : (
                        <option></option>
                    )} 
            </select>
            <select className="form-select ms-2" aria-label="Default select example" style={{borderColor: '#EB00D3', borderRadius: '30px', fontSize: '10px', height: '44px'}}>
                <option selected>SELECCIONA TU COMUNA</option>
                {comunas.length !== 0 ? (
                        comunas.map(({ comuna, identificador}, id ) => (
                            <option value={identificador} className="text-dark" key={id}>{comuna}</option>
                        ))
                    ) : (
                        <option>Selecciona un Región</option>
                    )} 
            
            </select>
        
        
        
        </div>


    )

}