import { Button } from '@mui/material'
import React, {  useContext, useEffect } from 'react'
import useState from 'react-usestateref'
import { CartContext } from '../../context/CartContext'
import CartStepper from './CartStepper.js'


export const Cart = () => {
  const { CartItems, debugCart } = useContext(CartContext)
  const [totalPrice, setTotalPrice] = useState(0)

  const calcTotal = (setPrice) => {
    let mountTotal = 0

    CartItems.forEach(element => {
      mountTotal += element.price*element.CartQty
    })

    setPrice(mountTotal)
    setTotalPrice(mountTotal)

  }
  
  useEffect(() => {
    calcTotal(setTotalPrice)
  }, [setTotalPrice])
  

  return (
    <div>
        <CartStepper innerTotal={totalPrice} />
    </div>
  )
}
