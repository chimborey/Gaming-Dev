import React from 'react'
import { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { FaTrash } from 'react-icons/fa'
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
const CartDetail = ({ item }) => {
      const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(ShopContext)
      return (
            <div className='flex justify-between gap-12 items-center cursor-pointer'>
                  <div className='flex items-center gap-4 mt-3 mb-5'>
                        <img src={item.img} alt={item.name} className='w-16 h-16 object-cover rounded-md' />
                        <div className='flex flex-col items-center gap-3'>
                              <h3 className='font-desc font-bold'>{item.title}</h3>
                              <div>
                                    <FaTrash onClick={() => removeFromCart(item.id)} className='text-red-500 text-lg cursor-pointer' />
                              </div>
                        </div>
                  </div>


                  <div className='w-[570px] -translate-x-12 flex justify-between items-center p-4 rounded-md'>
                        <div className='flex  items-center gap-3'>
                              <button>
                                    <IoMdRemove onClick={() => decreaseQuantity(item.id)} className='w-9 h-9 text-2xl rounded-full p-2 bg-red-600 hover:bg-red-200 duration-300 ease-linear flex justify-center items-center tfont-title' />
                              </button>
                              <span>{item.amount}</span>
                              <button className='w-9 h-9 text-2xl rounded-full p-2 bg-green-600 hover:bg-green-200 duration-300 ease-linear flex justify-center items-center tfont-title'>
                                    <IoMdAdd onClick={() => increaseQuantity(item.id)} className='text-gray-500 text-lg cursor-pointer' />
                              </button>
                        </div>

                        <div className='font-text'>
                              ${item.price}
                        </div>

                        <div className='font-text'>
                              $ {parseFloat(item.price * item.amount).toFixed(2)}
                        </div>
                  </div>
            </div>
      )
}

export default CartDetail