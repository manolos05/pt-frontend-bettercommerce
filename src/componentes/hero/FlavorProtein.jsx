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

            <div className="dropdown">
                <button className="btn btn-outline-light dropdown-toggle flavor btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Escogre sabor
                </button>
                <ul className="dropdown-menu dropdown-menu-ligth">


                    {flavors.length !== 0 ? (
                        flavors.map(({ flavor, id} ) => (
                            <li className="" key={id}><a class="dropdown-item" href="#">{flavor}</a></li>
                        ))
                    ) : (
                        <div></div>
                    )}

                       
                    
              
                </ul>
            </div>

        </>

    )


}