import React from 'react'
import { Link } from 'react-router-dom'
import H1 from '../assets/h1.png'
const Hero = () => {
      return (
            <section className='w-full overflow-hidden py-14 bg-white'>
                  <main className='mt-12 container'>
                        {/* hero */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                              {/* hero-left-text */}
                              <div className='flex flex-col items-start justify-center space-y-4'>
                                    <h3 className='font-hero' data-aos='fade-up' data-aos-delay='300'>discover next-level <br /> audio experiences</h3>
                                    <p className='font-desc' data-aos='fade-up' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates modi quam reiciendis amet veritatis officiis nemo dolore mollitia ea iure, maiores cupiditate magni laborum expedita recusandae ratione fugiat nisi quos pariatur eius temporibus fuga atque. Fugit sint natus impedit labore accusamus at suscipit. Enim facere molestiae cumque laudantium.</p>
                                    <div data-aos='fade-up' data-aos-delay='900'>
                                          <Link to={'/product'} className='btn'> order now</Link>
                                    </div>
                              </div>
                              {/* hero-right-img */}
                              <div data-aos='fade-up' data-aos-delay='600'>
                                    <img src={H1} alt="" className='w-full h48 md:w-[490px] md:h-[490px] lg:w-[490px] lg:h-[490px] rounded-lg cursor-pointer hero-animation'/>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default Hero