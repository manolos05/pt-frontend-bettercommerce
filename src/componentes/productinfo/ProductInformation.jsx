import { InformationSection } from "./InformationSecction"
import { PhotoSecction } from "./PhotoSecction"


export const ProductInformation = () => {


    return (
        <>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <PhotoSecction />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <InformationSection />
                </div>
            </div>
            
        </>
    )
}