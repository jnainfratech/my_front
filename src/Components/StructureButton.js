import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const DropdownButton = () => {
  const [selectedOption, setSelectedOption] = useState('Structure');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        {selectedOption}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleOptionChange('Water Tank')}>
          Water Tank
        </MenuItem>
        <MenuItem onClick={() => handleOptionChange('Coming Soon')}>
          Coming Soon
        </MenuItem>
       
      </Menu>
    </div>
  );
};

export default DropdownButton;
