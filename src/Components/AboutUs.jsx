import React from 'react'
import { FaCheck } from "react-icons/fa";
import A1 from '../assets/a1.png'
const AboutUs = () => {
      return (
            <section className='w-full overflow-hidden py-14 bg-white'>
                  <main className='mt-12 container'>
                        {/* about */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                              {/* about-lerft-img */}
                              <div data-aos='fade-up' data-aos-delay='600'>
                                    <img src={A1} alt="" className='w-full h48 md:w-[490px] md:h-[490px] lg:w-[490px] lg:h-[490px] rounded-lg cursor-pointer hero-animation' />
                              </div>
                              {/* about-right-text */}
                              <div className='flex justify-cente flex-col items-start space-y-4'>
                                    <h3 className='font-group' data-aos='fade-up' data-aos-delay='300'>about products</h3>
                                    <p className='span-group' data-aos='fade-up' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque sed sunt voluptatum illo excepturi aliquam officiis tenetur illum qui neque! Dolorem ut quis sequi magni dicta soluta eius nostrum. Accusamus, deleniti voluptatibus incidunt maxime illum commodi explicabo. Repellendus voluptatibus fugiat eos exercitationem ab fuga, eaque rerum veniam?</p>
                                    <p className='font-desc' data-aos='fade-up' data-aos-delay='900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, excepturi totam hic, quibusdam error cumque eius maxime accusamus harum dolore architecto enim id magni atque necessitatibus animi quod consequatur eligendi reprehenderit vero quasi laudantium ad optio! Cumque aliquam, asperiores ex aliquid sed iure totam quasi minima soluta nemo recusandae dicta, tenetur eaque, error corrupti veritatis! Consequatur, delectus!</p>
                                    <div className='flex justify-start items-start gap-4' data-aos='fade-up' data-aos-delay='1200'>
                                          <FaCheck className='w-6 h-6 rounded-full bg-blue-400 px-2 py-2 text-white'/>
                                          <h5 className='span-group'>wireless headphones</h5>
                                    </div>
                                    <div className='flex justify-start items-start gap-4' data-aos='fade-up' data-aos-delay='1500'>
                                          <FaCheck className='w-6 h-6 rounded-full bg-blue-400 px-2 py-2 text-white'/>
                                          <h5 className='span-group'>hight quanlity sounds</h5>
                                    </div>
                                    <div className='flex justify-start items-start gap-4' data-aos='fade-up' data-aos-delay='1800'>
                                          <FaCheck className='w-6 h-6 rounded-full bg-blue-400 px-2 py-2 text-white'/>
                                          <h5 className='span-group'>voice call fracility</h5>
                                    </div>
                                    <div className='flex justify-start items-start gap-4' data-aos='fade-up' data-aos-delay='2100'>
                                          <FaCheck className='w-6 h-6 rounded-full bg-blue-400 px-2 py-2 text-white'/>
                                          <h5 className='span-group'>nice and soft design</h5>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default AboutUs