import React from 'react';
import Cards from 'react-credit-cards';
import { useContext } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import TextField from '@mui/material/TextField';
import { Box, Grid } from '@mui/material';
import { CartContext } from '../../context/CartContext';


export const CartFormCredCard = () => {

  const { CartOrder, setCartOrder } = useContext(CartContext)
  

  const handleInputChange = (e) => {
    setCartOrder({...CartOrder, credcard : {...CartOrder.credcard, [e.target.name]: e.target.value}})
    };

  return (
      <div id="PaymentForm">
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Cards
              cvc={CartOrder.credcard.cvc}
              expiry={CartOrder.credcard.expiry}
              name={CartOrder.credcard.name}
              number={CartOrder.credcard.number}
            />
          </Grid>
          <Grid item xs={5}>
            <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            >
              <TextField
                value={CartOrder.credcard.number}
                required
                variant='standard'
                type="tel"
                name="number"
                placeholder="Numero de Tarjeta"
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                value={CartOrder.credcard.cvc}
                sx={{ width : '46%' }}
                required
                variant='standard'
                type="tel"
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
              />
              <TextField
                value={CartOrder.credcard.expiry}
                required
                sx={{ width : '46%' }}
                variant='standard'
                type="tel"
                name="expiry"
                placeholder="Fecha de expiracion"
                onChange={handleInputChange}
              />
              <TextField
                value={CartOrder.credcard.name}
                fullWidth
                required
                variant='standard'
                type="text"
                name="name"
                placeholder="Nombre en la tarjeta"
                onChange={handleInputChange}
              />

            </Box>
          </Grid>
        </Grid>
      </div>
  )
}
