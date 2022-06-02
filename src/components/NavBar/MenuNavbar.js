import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        key='MenuProductos'
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        <Typography>
            PRODUCTOS
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Link style={{ textDecoration: 'none', color: '#000000' }} to={'/'}>TODOS</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link style={{ textDecoration: 'none', color: '#000000' }} to={'/high-basket'}>- High Basket</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link style={{ textDecoration: 'none', color: '#000000' }} to={'/low-street'}>- Low Street</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link style={{ textDecoration: 'none', color: '#000000' }} to={'/running'}>- Running</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}