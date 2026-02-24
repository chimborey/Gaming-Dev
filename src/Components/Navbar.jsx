import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { MdCloseFullscreen } from "react-icons/md";
import { FaShoppingBag } from 'react-icons/fa';
import { ShopContext } from './ShopContext';
const Navbar = () => {
      // secrolled
      const [isScrolled, setIsScrolled] = useState(false)
      useEffect(() => {
            const handleScroll = () => {
                  setIsScrolled(window.screenY > 50)
            }
            window.addEventListener('scroll', handleScroll)
            return () => {
                  window.removeEventListener('scroll', handleScroll)
            }
      }, [])
      // click menu
      const [isOpenNav, setIsOpenNav] = useState (false)
      // cart
      const {cart} = useContext (ShopContext)
      return (
            <section className={` w-full top-0 left-0 shadow-2xl backdrop-blur-3xl z-50 shadow-gray-300 fixed ${isScrolled ? '' : 'bg-blue-300'}`}>
                  <nav className='flex container justify-between items-center h-14' data-aos='fade-down' data-aos-delay='450'>
                        {/* logo */}
                        <Link to={'/'} className='font-title'>gamming dev</Link>
                        {/* menu */}
                        <div className='py-14 hidden lg:block'>
                              <div className='flex justify-between items-center gap-7'>
                                    <Link to={'/'} className='font-text'>home</Link>
                                    <Link to={'/about'} className='font-text'>about</Link>
                                    <Link to={'/features'} className='font-text'>features</Link>
                                    <Link to={'/product'} className='font-text'>product</Link>
                                    <Link to={'/contact'} className='font-text'>contact</Link>
                                    <Link to={'/faq'} className='font-text'>faq</Link>
                              </div>
                        </div>
                        {/* click menu and login */}
                        <div className='py-4 flex items-center gap-3'>
                              <Link to={'/cart'} className='py-4 relative hidden md:block'>
                                    <FaShoppingBag size={25}/>
                                    <span className='-right-2 top-2 absolute' size={13}>{cart.length}</span>
                              </Link>
                              <button className='login'>login</button>
                              <button className='sm:block lg:hidden'>
                                    {
                                          isOpenNav ? 
                                          <MdCloseFullscreen size={25} onClick={()=> setIsOpenNav (!isOpenNav)}/>
                                          :
                                          <CiMenuFries size={25} onClick={()=> setIsOpenNav (!isOpenNav)}/>
                                    }
                              </button>
                        </div>
                  </nav>
                  {/* click menu mobile */}
                  <div className={` w-full absolute lg:hidden transition-all duration-300 left-0 py-14 bg-blue-500 ${isOpenNav ? 'top-14' : '-top-[1200px]'}`}>
                        <div className='flex flex-col space-y-4 items-center'>
                              <Link to={'/'} className='font-text'>home</Link>
                              <Link to={'/about'} className='font-text'>about</Link>
                              <Link to={'/features'} className='font-text'>features</Link>
                              <Link to={'/product'} className='font-text'>product</Link>
                              <Link to={'/contact'} className='font-text'>contact</Link>
                              <Link to={'/faq'} className='font-text'>faq</Link>
                              <button className='py-4 relative md:hidden sm:block'>
                                    <FaShoppingBag size={25}/>
                                    <span className='-right-2 top-2 absolute' size={13}>0</span>
                              </button>
                        </div>
                  </div>
            </section>
      )
}

export default Navbar
