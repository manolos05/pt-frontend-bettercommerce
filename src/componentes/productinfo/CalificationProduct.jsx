import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

export const CalificationProduct = () => {

    return (
        <>
        <div className="d-flex mt-4 align-items-center justify-content-start" >
            <div>
             <p><strong style={{weight: '700'}}>12 </strong> valoracions de clientes <StarPurple500OutlinedIcon className="star" /> <strong style={{color: '#4A4A6A'}}>4.8 </strong> </p>
            </div>
            <div className="ms-4 ps-4 write-comment">
            
              <p style={{weight: '100'}}> <RateReviewOutlinedIcon /> <strong>Escribir cometario</strong> </p>
            </div>
            

        </div>

        
        
        
        
        </>

    )


}