import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
const FaqUs = () => {
      const FaqData = [
            {
                  id: 1,
                  title: 'the is 1st question',
                  subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint voluptas, aliquid iure repellendus quia harum ex? Ducimus, perferendis sit. Quia dolorem commodi necessitatibus numquam adipisci dolor minima molestias corrupti, alias accusamus voluptas dolore recusandae in saepe laudantium ea consequuntur eos ut amet tempore. Tempore, animi odio?'
            },
            {
                  id: 2,
                  title: 'the is 1st question',
                  subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint voluptas, aliquid iure repellendus quia harum ex? Ducimus, perferendis sit. Quia dolorem commodi necessitatibus numquam adipisci dolor minima molestias corrupti, alias accusamus voluptas dolore recusandae in saepe laudantium ea consequuntur eos ut amet tempore. Tempore, animi odio?'
            },
            {
                  id: 3,
                  title: 'the is 1st question',
                  subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint voluptas, aliquid iure repellendus quia harum ex? Ducimus, perferendis sit. Quia dolorem commodi necessitatibus numquam adipisci dolor minima molestias corrupti, alias accusamus voluptas dolore recusandae in saepe laudantium ea consequuntur eos ut amet tempore. Tempore, animi odio?'
            },
            {
                  id: 4,
                  title: 'the is 1st question',
                  subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint voluptas, aliquid iure repellendus quia harum ex? Ducimus, perferendis sit. Quia dolorem commodi necessitatibus numquam adipisci dolor minima molestias corrupti, alias accusamus voluptas dolore recusandae in saepe laudantium ea consequuntur eos ut amet tempore. Tempore, animi odio?'
            },
      ]
      const [openIndex, setOpenIndex] = useState(false)
      const toggleIndex = (index) => {
            setOpenIndex(index === openIndex ? null : index)
      }
      return (
            <section className='w-full py-14 overflow-hidden bg-white'>
                  <main className='mt-12 container'>
                        {/* faq-center */}
                        <div className='flex flex-col items-center justify-center'>
                              <h3 className='font-group' data-aos='zoom-in' data-aos-delay='300'>FAQs</h3>
                              <p className='font-desc' data-aos='zoom-in' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officiis, cumque dicta aliquid animi beatae recusandae distinctio saepe ab facere veniam harum qui delectus ad. Aliquam, iste earum. Praesentium hic impedit maxime voluptate. Hic sapiente inventore fugiat!</p>
                        </div>
                        <div className='mt-9 w-full overflow-hidden  space-y-2'>
                              {
                                    FaqData.map((faq, index) => (
                                          <div key={index.id} className='border relative w-full overflow-hidden bg-blue-900 shadow-sm rounded-xl py-2 px-4 hover:bg-white border-gray-600' data-aos='fade-up' data-aos-delay='900'>
                                                <button className='font-group' onClick={() => toggleIndex(index)}>
                                                      {faq.title}
                                                      <span className='absolute right-3 top-3'>
                                                            {
                                                                  openIndex === index ?
                                                                        (<FaChevronDown size={18} />)
                                                                        :
                                                                        (<FaChevronUp size={18} />)
                                                            }
                                                      </span>
                                                </button>
                                                {index === openIndex && <div className='font-desc'>{faq.subTitle}</div>}
                                          </div>
                                    ))
                              }
                        </div>
                  </main>
            </section>
      )
}

export default FaqUs