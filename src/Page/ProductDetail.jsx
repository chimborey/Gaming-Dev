import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../Data'
import { ShopContext } from '../Components/ShopContext'

const ProductDetail = () => {
  const {addToCart} = useContext(ShopContext)
  const { id } = useParams()
  const product = productData.find(
    (item) => item.id === parseInt(id)
  )
 

  return (
    <section className="w-full py-14">
      <main className="mt-12 container">
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6'>
          <img src={product?.img} className='w-full h-96 rounded-lg hover:scale-95 cursor-pointer duration-300 transition-all' data-aos='fade-right' data-aos-delay='450'/>
          <div className='flex items-start flex-col space-y-4 mt-4 mb-9'>
            <h3 className='font-group' data-aos='fade-left' data-aos-delay='300'>{product?.title}</h3>
            <p className='font-desc' data-aos='fade-left' data-aos-delay='600'>{product?.description}</p>
            <h5 className='span-group' data-aos='fade-left' data-aos-delay='900'>${product?.price}</h5>
            <div>
              <button className='btn' onClick={()=> addToCart(product, id)} data-aos='fade-left' data-aos-delay='1200'>buy now</button>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ProductDetail