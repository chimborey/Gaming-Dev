import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { SiTechcrunch } from "react-icons/si";
import { TbHierarchy2 } from "react-icons/tb";
import { PiCodesandboxLogoBold } from "react-icons/pi";
const FeaturesUs = () => {
      return (
            <section className='w-full py-14 overflow-hidden bg-white'>
                  <main className='mt-12 container'>
                        {/* Features-center */}
                        <div className='flex flex-col space-y-5 items-center'>
                              <h3 className='font-group' data-aos='fade-up' data-aos-delay='300'>product features</h3>
                              <p className='font-desc' data-aos='fade-up' data-aos-delay='600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nobis deleniti inventore ab corporis quos porro assumenda?</p>
                        </div>
                        {/* Features-grid */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9'>
                              {/* grid1 */}
                              <div className='w-full overflow-hidden cursor-pointer rounded-lg service-shadow border-blue-700 border-2 px-4 py-4' data-aos='fade-up' data-aos-delay='600'>
                                    <div className='flex flex-col items-center space-y-4'>
                                          <FaUsers size={47} className='text-blue-400' />
                                          <h3 className='span-group'>user friendly</h3>
                                          <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus cum, iusto esse ut saepe nulla. Fugit necessitatibus eaque dicta dolorum quibusdam iste vitae, ut hic culpa voluptas quidem accusamus numquam sapiente, cumque itaque. Tempore, iusto nesciunt eius deserunt voluptate dolor quisquam obcaecati officiis excepturi, minus voluptatem, nulla labore? Aliquid laborum at quas. A similique deserunt consectetur?</p>
                                    </div>
                              </div>
                              {/* grid02 */}
                              <div className='w-full overflow-hidden cursor-pointer rounded-lg service-shadow border-blue-700 border-2 px-4 py-4' data-aos='fade-up' data-aos-delay='900'>
                                    <div className='flex flex-col items-center space-y-4'>
                                          <SiTechcrunch size={47} className='text-blue-400' />
                                          <h3 className='span-group'>latest technology</h3>
                                          <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus cum, iusto esse ut saepe nulla. Fugit necessitatibus eaque dicta dolorum quibusdam iste vitae, ut hic culpa voluptas quidem accusamus numquam sapiente, cumque itaque. Tempore, iusto nesciunt eius deserunt voluptate dolor quisquam obcaecati officiis excepturi, minus voluptatem, nulla labore? Aliquid laborum at quas. A similique deserunt consectetur?</p>
                                    </div>
                              </div>
                              {/* grid03 */}
                              <div className='w-full overflow-hidden cursor-pointer rounded-lg service-shadow border-blue-700 border-2 px-4 py-4' data-aos='fade-up' data-aos-delay='1200'>
                                    <div className='flex flex-col items-center space-y-4'>
                                          <TbHierarchy2 size={47} className='text-blue-400' />
                                          <h3 className='span-group'>hight quantity</h3>
                                          <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus cum, iusto esse ut saepe nulla. Fugit necessitatibus eaque dicta dolorum quibusdam iste vitae, ut hic culpa voluptas quidem accusamus numquam sapiente, cumque itaque. Tempore, iusto nesciunt eius deserunt voluptate dolor quisquam obcaecati officiis excepturi, minus voluptatem, nulla labore? Aliquid laborum at quas. A similique deserunt consectetur?</p>
                                    </div>
                              </div>
                              {/* grid04 */}
                              <div className='w-full overflow-hidden cursor-pointer rounded-lg service-shadow border-blue-700 border-2 px-4 py-4' data-aos='fade-up' data-aos-delay='1500'>
                                    <div className='flex flex-col items-center space-y-4'>
                                          <PiCodesandboxLogoBold size={47} className='text-blue-400' />
                                          <h3 className='span-group'>awesome design</h3>
                                          <p className='font-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus cum, iusto esse ut saepe nulla. Fugit necessitatibus eaque dicta dolorum quibusdam iste vitae, ut hic culpa voluptas quidem accusamus numquam sapiente, cumque itaque. Tempore, iusto nesciunt eius deserunt voluptate dolor quisquam obcaecati officiis excepturi, minus voluptatem, nulla labore? Aliquid laborum at quas. A similique deserunt consectetur?</p>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default FeaturesUs