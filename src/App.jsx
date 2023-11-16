import { NavBar } from "./componentes/navBar/NavBar"
import { ProductInformation } from "./componentes/productinfo/ProductInformation"



import './app.css'
import { Footer } from "./componentes/Footer"
import { Carrousel } from "./componentes/carousel/Carrousel"





function App() {
 

  return (
    <>
 <NavBar />
      <div className='px-5'>
        <ProductInformation />
        <hr />
        <Carrousel />
      </div>
      <Footer />
   
    </>
  )
}

export default App
