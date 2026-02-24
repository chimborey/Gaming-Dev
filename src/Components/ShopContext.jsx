import { createContext, useMemo, useState } from "react";
import { productData } from "../Data";
import { toast } from 'react-toastify'
export const ShopContext = createContext()

export const ShopContextProvider = ({ children }) => {
      // product
      const [product, setProduct] = useState(productData)
      // cart
      const [cart, setCart] = useState([])
      // total
      const total = useMemo(() => {
            return cart.reduce(
                  (acc, item) => acc + parseFloat(item.price) * item.amount, 0
            )
      }, [cart])
      // quantity
      const quantity = useMemo(() => {
            return cart.reduce((acc, item) => acc + item.amount, 0)
      }, [cart])
      // add to cart
      const addToCart = (product) => {
            setCart((prev) => {
                  const exist = prev.find((item) => item.id === product.id);
                  if (exist) {
                        return prev.map((item) => item.id === product.id ? { ...item, amount: item.amount + 1 } : item)
                  }
                  toast.success('products added');
                  return [...prev, { ...product, amount: 1 }]
            })
      }
      // remove
      const removeFromCart = (id) => {
            setCart((prev) => prev.filter((item) => item.id !== id))
            toast.success('Removed')
      }
      // increase
      const increaseQuantity = (id) => {
            setCart((prev) => prev.map((item) => item.id === id ? { ...item, amount: item.amount + 1 } : item))
      }
      // decrease
      const decreaseQuantity = (id) => {
            setCart((prev) => prev.map((item) => item.id === id ? { ...item, amount: item.map - 1 } : item).filter((item) => item.amount > 0))
      }
      // clearCart
      const clearCart = () => {
            setCart([]);
            toast.success('cart cleared')
      }
      return (
            <ShopContext.Provider value=
                  {{
                        product,
                        setProduct,
                        cart,
                        setCart,
                        total,
                        quantity,
                        addToCart,
                        removeFromCart,
                        increaseQuantity,
                        decreaseQuantity,
                        clearCart,
                  }}>
                  {children}
            </ShopContext.Provider>
      )
}
export default ShopContextProvider