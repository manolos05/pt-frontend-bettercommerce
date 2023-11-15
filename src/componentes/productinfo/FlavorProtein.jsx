import { useEffect, useState } from "react"


export const FlavorProtein = () =>{

    const [ flavors, setFlavors ] = useState('')

    useEffect(()=> {
        try {
            const getFlavorProtien = async () => {
              const res = await fetch("http://127.0.0.1:3333/flavors/");
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
                        <div></div>
                    )}                    
                </select>
        

        </>

    )


}