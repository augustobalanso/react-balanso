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
import { Typography } from '@mui/material';



export default function TemporaryDrawer() {
 
  const { emptyCart, CartItems } = useContext(CartContext)
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
                <Badge badgeContent={CartItems.length} color="secondary">
                  <ShoppingCart color='white' fontSize={'large'} />
                </Badge>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {(CartItems.length !== 0 ? 
                  <div>
                  <CartTable />
                  <Button fullWidth onClick={() => emptyCart()} variant='outlined'>
                    VACIAR CARRITO
                  </Button>
                  <Button fullWidth variant='contained' >
                    <Link style={{ color: 'inherit' ,textDecoration: 'none' }} to={'/Cart'}>
                    FINALIZAR COMPRA
                    </Link>
                  </Button>
                  </div>
                   : 
                  <Typography sx={{ margin: '40px'}} align='center' variant='h4'>
                    Carrito Vacio
                  </Typography>)}
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
  );
}