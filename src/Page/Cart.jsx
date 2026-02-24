import React, { useContext } from 'react'
import { ShopContext } from '../Components/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import CartDetail from '../Components/CartDetail'
const Cart = () => {
  const { quantiy, total, clearCart, cart } = useContext(ShopContext)
  return (
    <div className='w-full bg-blue-300 mx-auto py-12 mt-14 flex flex-col md:flex-row gap-8 md:px-24'>
      {/* left section */}
      <div className=' container p-6' data-aos='zoom-in' data-aos-duration='1200'>
        {/* header */}
        <div className='flex justify-between items-center border-b pb-4'>
          <h1 className='font-title'>shopping cart</h1>
          <h1 className='font-title '>items: ({quantiy})</h1>
          <FiTrash2 onClick={clearCart} className='text-red-500 text-2xl cursor-pointer' />
        </div>
        {/* subheader */}
        <div className='grid grid-cols-4 font-title yellow font-semibold mt-6 pb-2 border-b font-title gap-64'>
          <span>produt</span>
          <span>quantity</span>
          <span>price</span>
          <span>total</span>
        </div>
        {/* cart item */}
        <div>
          {cart.length > 0 ? (
            cart.map((item) => {
              return <CartDetail key={item.id} item={item} />
            })
          ) : (
            <div className='items-center justify-center flex flex-col'>
              <p className='font-menu bg-purple mt-4 text-center font-title'>your cart is empty</p>
            </div>
          )}
        </div>
      </div>

      {/* rihgt section */}
      <div className='md:w-1/3 bg-slate p-6 rounded-lg pb-4' data-aos='zoom-in' data-aos-duration='1200'>
        <h2 className=' border-b border-blue-600 font-title pb-4'>cart summary</h2>

        <div className='flex justify-between mt-2 font-desc'>
          <span className='font-menu amber '>items:</span>
          <span className='font-menu yellow'>{quantiy}</span>
        </div>

        <div className='flex justify-between mt-2 font-desc'>
          <span className='font-menu amber'>subtotal</span>
          <span className='font-menu yellow'>${isNaN(total) ? 0 : total}</span>
        </div>

        <div className='flex justify-between mt-2 font-desc'>
          <span className='font-menu amber '>delivery</span>
          <span className='font-menu yellow'>Free</span>
        </div>

        <div className='flex justify-between mt-2 font-desc'>
          <span className='font-menu amber'>total cost</span>
          <span className='font-menu yellow'>${isNaN(total) ? 0 : total}</span>
        </div>
        <button className='check btn mt-6'>checkout</button>
      </div>
    </div>
  )
}

export default Cart