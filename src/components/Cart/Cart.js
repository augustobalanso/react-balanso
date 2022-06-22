import React, {  useContext, useEffect } from 'react'
import useState from 'react-usestateref'
import { CartContext } from '../../context/CartContext'
import CartStepper from './CartStepper.js'
import { Link } from 'react-router-dom'


export const Cart = () => {
  const { CartItems } = useContext(CartContext)
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
      {CartItems.length === 0 
        ? 
        <h1>Carrito Vacio, volvé para agregar <Link to={'/'}>productos</Link> </h1> 
        : 
        <CartStepper innerTotal={totalPrice} />}
    </div>
  )
}
