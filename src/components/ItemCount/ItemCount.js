import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function GroupSizesColors({stock}) {
    const [CartQty, setCartQty] = useState(1);

    const addQty = () => {
        setCartQty(CartQty + 1)
    }
    const remQty = () => {
        setCartQty(CartQty - 1)
    }

    const ConsoleItemQty = () => {
        console.log(`Se agregaron ${CartQty === 1 ? CartQty + ' par' : CartQty + ' pares'} de zapatillas al carrito`)
        setCartQty(1);
    }

    const buttons = [
        <Button key="rem" onClick={remQty} disabled={CartQty === 1}>-</Button>,
        <Button key="buy" onClick={ConsoleItemQty} disabled={stock === 0}>
            <Badge badgeContent={CartQty} invisible={CartQty === 1} color="secondary">
                COMPRAR
            </Badge>
        </Button>,
        <Button key="add" onClick={addQty} disabled={CartQty === stock || stock === 0}>+</Button>,
      ];    

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </Box>
    );
}
