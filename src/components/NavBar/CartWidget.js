import React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartTable from './CartTable'
import { Link } from 'react-router-dom';



export default function TemporaryDrawer() {
 
  const { emptyCart } = useContext(CartContext)
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : { xs: '400px', md : '500px', lg : '600px'}}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </Box>
  );

  return (
        <div>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button sx={{ color : '#FFFFFF', mr: '15px'}} onClick={toggleDrawer(anchor, true)}>
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCart color='white' fontSize={'large'} />
                </Badge>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
              <CartTable />
              <Button onClick={() => emptyCart()} variant='outlined' >
                VACIAR CARRITO
              </Button>
              <Button variant='contained' >
                <Link style={{ color: 'inherit' ,textDecoration: 'none' }} to={'/Cart'}>
                  FINALIZAR COMPRA
                </Link>
              </Button>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
  );
}