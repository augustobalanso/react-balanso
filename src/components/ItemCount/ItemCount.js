import React, { useContext } from 'react';
import useState from 'react-usestateref'
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CardActions, ToggleButtonGroup, ToggleButton, Divider, Typography } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function GroupSizesColors({id,title,img,price,stock,setShowCartLink}) {
    const [CartQty, setCartQty] = useState(1);
    const [talle, setTalle] = useState(0);

    const { addProdToCart } = useContext(CartContext) 

    const addQty = () => {
        setCartQty(CartQty + 1)
    }
    const remQty = () => {
        setCartQty(CartQty - 1)
    }

    const confirmedCart = () => {
          setShowCartLink(true);
          setCartQty(1);
          addProdToCart({img,title,price,CartQty,talle,id,cartConfirmID:id+talle})
    }

    const buttons = [
        <Button disabled={talle === 0 || stock === 0 } key="rem" onClick={remQty} >-</Button>,
        <Button disabled={talle === 0 || stock === 0 } key="buy" onClick={confirmedCart} >
            <Badge  badgeContent={CartQty} invisible={CartQty === 1} color="secondary">
                COMPRAR
            </Badge>
        </Button>,
        <Button disabled={talle === 0 || stock === 0 } key="add" onClick={addQty} >+</Button>,
      ];    
       
    const handleTalle = (event, newAlignment) => {
      setTalle(newAlignment);
    };

    return (
      <div>
        <Typography textAlign={'left'} paddingLeft={2} >
          Talle
        </Typography>
        <CardActions sx={{ marginTop:'8px', marginBottom:'30px' , justifyContent:'center' }}>
          <ToggleButtonGroup
              color='primary'
              value={talle}
              exclusive
              onChange={handleTalle}
              aria-label="select Talle"
          >
              <ToggleButton value="40" aria-label="left aligned">
                40
              </ToggleButton>
              <ToggleButton value="41" aria-label="left aligned">
                41
              </ToggleButton>
              <ToggleButton value="42" aria-label="left aligned">
                42
              </ToggleButton>
              <ToggleButton value="43" aria-label="left aligned">
                43
              </ToggleButton>
              <ToggleButton value="44" aria-label="centered">
                44
              </ToggleButton>
              <ToggleButton value="45" aria-label="right aligned">
                45
              </ToggleButton>
              <ToggleButton value="46" aria-label="justified">
                46
              </ToggleButton>
            </ToggleButtonGroup>
        </CardActions>
        <Divider />
        <Typography marginTop={2}>
          Stock:{stock}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width:'100%',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup size="large" aria-label="large button group">
            {buttons}
          </ButtonGroup>
        </Box>
      </div>

    );
}
