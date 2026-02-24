import React from 'react'

const ContactUs = () => {
      return (
            <section className='w-full py-14 overflow-hidden'>
                  <main className='mt-12 container'>
                        {/* contact-center */}
                        <div className='flex flex-col justify-center items-center'>
                              <h3 className='font-group' data-aos='zoom-in' data-aos-delay='300'>contact us</h3>
                              <p className='font-desc' data-aos='zoom-in' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia quod nulla accusamus ut eligendi sunt alias?</p>
                        </div>
                        {/* contact-form */}
                        <div className='flex justify-between items-center space-y-4 flex-col mt-7'>
                              <div className='grid grid-cols1 md:grid-cols-1 lg:grid-cols-1 gap-6'>
                                    <div className='flex justify-between items-center gap-3'>
                                          <input type="text" name="" id="" placeholder='first name' className='w-full overflow-auto md:w-[270px] lg:w-[530px]' data-aos='fade-right' data-aos-delay='300' />
                                          <input type="text" name="" id="" placeholder='last name' className='w-full overflow-auto md:w-[270px] lg:w-[530px]' data-aos='fade-left' data-aos-delay='600' />
                                    </div>
                                    <div className='flex justify-between items-center gap-3'>
                                          <input type="text" name="" id="" placeholder='your email' className='w-full overflow-auto md:w-[270px] lg:w-[530px]' data-aos='fade-right' data-aos-delay='1200' />
                                          <input type="text" name="" id="" placeholder='your number' className='w-full overflow-auto md:w-[270px] lg:w-[530px]' data-aos='fade-left' data-aos-delay='1500' />
                                    </div>
                                    <div data-aos='fade-up' data-aos-delay='300'>
                                          <textarea name="" id="" className='w-full h-44 bg-orange-200 border-4 border-white outline-none rounded-lg rotate-3 hover:rotate-0 mt-5 duration-300 transition-all px-4 py-4 capitalize'></textarea>
                                    </div>
                                    <div className='mx-auto' data-aos='fade-up' data-aos-delay='300'>
                                          <button className='btn-hero'>send message</button>
                                    </div>
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default ContactUs