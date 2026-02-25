import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {

  return (
    <section className='w-full py-14 overflow-hidden bg-blue-300' data-aos='zoom-in' data-aos-delay='350'>
      <main className='mt-12 container'>
        {/* footer */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {/* footer-header */}
          {/* grid01 */}
          <div className='flex flex-col text-start'>
            <Link to={'/'} className='font-title' data-aos='fade-up' data-aos-delay='300'>gaming dev</Link>
            <p className='font-desc' data-aos='fade-up' data-aos-delay='600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus fugit quo accusamus pariatur dolor vero soluta sint neque ex velit, blanditiis quia praesentium saepe reiciendis consequatur quis provident reprehenderit iure in repellendus delectus qui et quasi.</p>
          </div>
          {/* grid01 */}
          <div className='flex flex-col text-center' data-aos='fade-up' data-aos-delay='300'>
            <h3 to={'/'} className='font-title'>links</h3>
            <div>
              <div className='flex flex-col items-center gap-2' data-aos='fade-up' data-aos-delay='600'>
                <Link to={'/'} className='font-text'>home</Link>
                <Link to={'/service'} className='font-text'>service</Link>
                <Link to={'/about'} className='font-text'>about</Link>
                <Link to={'/blog'} className='font-text'>blog</Link>
                <Link to={'/contact'} className='font-text'>contact</Link>
                <Link to={'/faq'} className='font-text'>faq</Link>
              </div>
            </div>
          </div>
          {/* grid02 */}
          <div className='flex flex-col text-center md:text-start sm:text-center'>
            <h3 to={'/'} className='font-title' data-aos='fade-up' data-aos-delay='300'>description</h3>
            <div className='flex flex-col py-3 md:items-start sm:text-center space-y-2' data-aos='fade-up' data-aos-delay='600'>
              <h3 className='span-group'>hero dog dev</h3>
              <h3 className='span-group'>why chosse dog dev</h3>
              <h3 className='span-group'>about dog dev</h3>
              <h3 className='span-group'>what pet perents say</h3>
              <h3 className='span-group'>contact us</h3>
              <h3 className='span-group'>FAQs</h3>
            </div>
          </div>
          {/* grid04 */}
          <div className='flex flex-col items-center' data-aos='fade-up' data-aos-delay='300'>
            <h3 to={'/'} className='font-title'>follow us</h3>
            <div className='flex flex-col text-center items-center space-y-3 mt-5 cursor-pointer' data-aos='fade-up' data-aos-delay='600'>
              <FaFacebook className='text-white rounded-full w-7 h-7' />
              <BsTwitterX className='text-white rounded-full w-7 h-7' />
              <LuInstagram className='text-white rounded-full w-7 h-7' />
            </div>
          </div>
        </div>
        {/* footer-footer */}
        <div className='text-center mx-auto mt-7 mb-7' data-aos='fade-up' data-aos-delay='300'>
          <span className='text-sm text-white'>@copyright gaming_dev by <span className='text-yellow-300'>technology-developer</span> | All rights reserved</span>
        </div>
      </main>
    </section>
  )
}

export default Footer