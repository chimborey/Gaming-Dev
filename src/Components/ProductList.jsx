import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
      const { product, addToCart } = useContext(ShopContext)
      return (
            <section className='w-full py-14 overflow-hidden'>
                  <main className='mt-12 container'>
                        {/* product-center */}
                        <div className='flex justify-center items-center flex-col space-y-3'>
                              <h3 className='font-group' data-aos='zoom-in' data-aos-delay='300'>our products</h3>
                              <p className='font-desc' data-aos='zoom-in' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat voluptas ut. Odio quia blanditiis laboriosam, repellat unde eveniet ipsa aut iure molestias, mollitia quod harum facilis?</p>
                        </div>
                        {/* product-grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9 cursor-pointer'>
                              {
                                    product.map((products) => {
                                          const { id, img, description, title, price } = products
                                          return (
                                                <div key={id} className='w-full overflow-hidden rounded-lg service-shadow  bg-gray-300' data-aos='zoom-in' data-aos-delay='600'>
                                                      <Link to={`/product/${products.id}`}>
                                                            <img src={img} alt="" className='w-full h-44 rounded-lg hover:scale-110 duration-300 transition-all' />
                                                      </Link>
                                                      <div className='flex items-center flex-col space-y-4 mt-4 mb-9'>
                                                            <h3 className='font-group'>{title}</h3>
                                                            <p className='font-desc px-4'>{description}</p>
                                                            <h5 className='span-group'>${price}</h5>
                                                            <button onClick={() => addToCart(products)} className='btn'>buy now</button>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </main>
            </section>
      )
}

export default ProductList