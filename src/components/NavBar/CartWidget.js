import React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Typography } from '@mui/material';



export default function TemporaryDrawer() {
 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : { xs: '350px', md : '400px', lg : '500px'}}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Typography align='center' marginTop={'40px'} >
            A futuro aqui habrá carrito
        </Typography>
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
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
  );
}