import { useEffect, useState } from "react"


export const FlavorProtein = () =>{

    const [ flavors, setFlavors ] = useState('')

    const URL = import.meta.env.VITE_URL

    useEffect(()=> {
        try {
            const getFlavorProtien = async () => {
              const res = await fetch(`${URL}/flavors`);
              const data = await res.json();
              setFlavors(data);
            };
            getFlavorProtien();
          } catch (error) {
            console.log("error", error);
          }
    }, [])
   


    return (

        <>

         

                <select className="form-select flavor chooseflavor" >
                    <option selected className="flavorselected">Escoger sabor</option>
                    {flavors.length !== 0 ? (
                        flavors.map(({ flavor, id} ) => (
                            <option value={id} className="text-dark" key={id}>{flavor}</option>
                        ))
                    ) : (
                        <option></option>
                    )}                    
                </select>
        

        </>

    )


}