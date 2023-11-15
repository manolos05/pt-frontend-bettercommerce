/* eslint-disable react/prop-types */

import { ChevronRight } from '@mui/icons-material';

export const CustomButtonRight = ({ onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      style={{
        right: 'calc(-5% + 1px)',
      }}
      className='custom-buttons'
    >
      <ChevronRight />
    </div>
  );
};
