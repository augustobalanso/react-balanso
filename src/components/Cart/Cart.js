import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartStepper from './CartStepper.js'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { CartItems } = useContext(CartContext)

  let totalPrice = 0
  
  CartItems.forEach(element => {
    totalPrice += element.price*element.CartQty
  })

  return (
    <div>
      {CartItems.length === 0 
        ? 
        <h1>Carrito Vacio, volvé para agregar <Link to={'/'}>productos</Link> </h1> 
        : 
        <CartStepper />}
    </div>
  )
}
