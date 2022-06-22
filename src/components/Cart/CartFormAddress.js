import React from 'react'
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { CartContext } from '../../context/CartContext';

export const CartFormAddress = () => {

  const { CartOrder, setCartOrder } = useContext(CartContext)

  const handleChange = (e) => {
    setCartOrder({...CartOrder, buyer : {...CartOrder.buyer, [e.target.name]: e.target.value}})
  }

  return (
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      >

        <TextField 
          required 
          id="fullName"
          name='name' 
          label="Nombre completo" 
          variant="outlined"
          value={CartOrder.buyer.name}
          onChange={handleChange}
        />
        <TextField 
          required 
          id="phone"
          name='phone' 
          label="Teléfono" 
          variant="outlined"
          value={CartOrder.buyer.phone}
          onChange={handleChange}
        />
        <TextField 
          required 
          id="email"
          name='email' 
          label="E-mail" 
          variant="outlined"
          value={CartOrder.buyer.email}
          onChange={handleChange}
        />
        <TextField 
          required 
          id="address"
          name='address' 
          label="Dirección de envío" 
          variant="outlined"
          value={CartOrder.buyer.address}
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-static"
          name='notes'
          label="Notas"
          value={CartOrder.buyer.notes}
          multiline
          rows={4}
          fullWidth
          onChange={handleChange}        
        />
      </Box>
    </div>
  )
}
