/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export const CustomButtomLeft = ({ onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      style={{
        left: 'calc(-5% + 1px)',
      }}
      className='custom-buttons'
    >
      <KeyboardArrowLeftIcon />
    </div>
  );
};
