import React from 'react'
import CartTable from '../NavBar/CartTable'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {
  const { CartItems } = useContext(CartContext)

  let totalPrice = 0
  
  CartItems.forEach(element => {
    totalPrice += element.price*element.CartQty
  })

  return (
    <div>
      <CartTable />
      <h1>
        Total = {`$${totalPrice}`}
      </h1>
    </div>
  )
}
