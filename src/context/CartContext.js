import { useState , createContext } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [CartItems, setCartItems] = useState([])

    const addProdToCart = (producto) => {
        let isInCart = CartItems.find(cartItem => cartItem.cartConfirmID === producto.cartConfirmID)
        if(!isInCart){
            setCartItems(CartItems => [...CartItems, producto]);
        } else {
            isInCart.CartQty = isInCart.CartQty+producto.CartQty
        }

    }

    const emptyCart = () => {
        setCartItems([])
    }

    const deleteItemCart = (productoID) => {
        let filteredItems = CartItems.filter(cartItem => cartItem.cartConfirmID !== productoID)
        setCartItems(filteredItems)
    }

    const consoleLogCart = () => {
        console.log(CartItems)
    }

    const data = {
        CartItems,
        addProdToCart,
        emptyCart,
        consoleLogCart,
        deleteItemCart
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext }
export default CartProvider