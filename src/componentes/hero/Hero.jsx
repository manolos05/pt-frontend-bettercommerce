import { InformationSection } from "./InformationSecction"
import { PhotoSecction } from "./PhotoSecction"


export const Hero = () => {


    return (
        <>
        <div className="row">
            <div className="col-6">
                <PhotoSecction />
            </div>
            <div className="col-6">
                <InformationSection />
            </div>

        </div>
            
        </>
    )
}