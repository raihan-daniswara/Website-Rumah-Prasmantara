import { NavLink } from 'react-router-dom'
import './NavigationBar.css'
import { useState } from 'react'
import {
  HiHome,
  HiChatAlt2,
  HiOutlineAcademicCap,
  HiOutlineClipboardList
} from 'react-icons/hi'

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <>
      {/* Large */}
      <nav className="hidden lg:flex nav-bar fixed mt-3 bg-linear-0 from-[#3C261A]/95 to-[#4d3123]/95 transition-all duration-500 z-50 left-1/2 -translate-x-1/2 min-w-6xl max-w-7xl mx-auto items-center justify-between px-2.5 backdrop-blur-sm shadow-md py-0.5 rounded-full">

        {/* Brand */}
        <NavLink
          to="/"
          className="flex items-center gap-3 py-1"
        >
          <img src="/logo/rumah-prasmantara.svg" alt="Logo Rumah Prasmantara" className="w-15 h-15" />
          <h1
            className="text-[#DBCECE] text-3xl font-medium pt-1"
            style={{ fontFamily: '"Great Vibes", cursive' }}
          >
            Rumah Prasmantara
          </h1>
        </NavLink>

        {/* Navigation Links */}
        <div
          className="flex items-center gap-8 text-2xl text-[#cfcfcf] mt-1"
        >

          {/* Home Navigation */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all duration-200 font-semibold border-b-2 leading-none ${isActive ? "text-[#EAAE8F] border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
              }`
            }
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Beranda
          </NavLink>

          {/* About Us Navigation */}
          <NavLink
            to="/tentang"
            className={({ isActive }) =>
              `transition-all duration-200 font-medium border-b-2 leading-none ${isActive ? "text-[#EAAE8F] border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
              }`
            }
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Tentang Kami
          </NavLink>

          {/* Product Navigation */}
          <NavLink
            to="/produk"
            className={({ isActive }) =>
              `transition-all duration-200 font-medium border-b-2 leading-none ${isActive ? "text-[#EAAE8F] border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
              }`
            }
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Produk
          </NavLink>

          {/* Testimony Navigation */}
          <NavLink
            to="/testimoni"
            className={({ isActive }) =>
              `transition-all duration-200 font-medium border-b-2 leading-none ${isActive ? "text-[#EAAE8F] border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"
              }`
            }
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Testimoni
          </NavLink>
        </div>

        {/* Contact Navigation Button */}
        <NavLink
          to="/kontak"
          className={({ isActive }) => ` ml-4 px-8 py-2 text-2xl rounded-full font-semibold bg-[#2D1F18]/80 text-[#EAAE8F] border-3 shadow-md ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"} transition-all `}
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Hubungi <span className='text-[#C54300]'>Kami</span>
        </NavLink>
      </nav>

      {/* Small */}
      <nav className="lg:hidden nav-bar fixed top-5 left-5 w-fit z-50 flex items-center justify-between px-2 py-2 bg-[#2C231E]/90 backdrop-blur-sm rounded-[10px] shadow-md">

        {/* Hamburger */}
        <button onClick={toggleMenu} className="text-[#EAAE8F] focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>
      <div className={`sm:block lg:hidden fixed top-0 left-0 h-full w-64 bg-[#3A251B] text-[#EAAE8F] shadow-xl backdrop-blur-sm transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='h-full flex flex-col justify-around'>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-[#EAAE8F] text-2xl font-bold">&times;</button>
          </div>
          {/* Brand */}
          <NavLink
            to="/"
            className="flex flex-col justify-center items-center gap-3 py-1"
          >
            <img src="/logo/rumah-prasmantara.svg" alt="Logo Rumah Prasmantara" className="w-[50px] h-[50px]" />
            <h1
              className="text-[#DBCECE] text-2xl font-medium pt-1 text-center"
              style={{ fontFamily: '"Great Vibes", cursive' }}
            >
              Rumah Prasmantara
            </h1>
          </NavLink>
          <div className="flex flex-col items-start gap-6 px-6 mt-4">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>  `flex items-center gap-3 text-2xl font-medium border-b-2 pb-1 transition-all duration-500 leading-none ${isActive ? "text-[#C54300] border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"} hover:text-[#C54300]`}
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              <HiHome className="text-2xl" /> Beranda
            </NavLink>
            <NavLink
              to="/tentang"
              onClick={toggleMenu}
              className={({ isActive }) =>  `flex items-center gap-3 text-2xl font-medium border-b-2 pb-1 transition-all duration-500 leading-none ${isActive ? "text-[#C54300] border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"} hover:text-[#C54300]`}
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              <HiChatAlt2 className="text-2xl" /> Tentang Kami
            </NavLink>
            <NavLink
              to="/produk"
              onClick={toggleMenu}
              className={({ isActive }) =>  `flex items-center gap-3 text-2xl font-medium border-b-2 pb-1 transition-all duration-500 leading-none ${isActive ? "text-[#C54300] border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"} hover:text-[#C54300]`}
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              <HiOutlineAcademicCap className="text-2xl" /> Produk
            </NavLink>
            <NavLink
              to="/testimoni"
              onClick={toggleMenu}
              className={({ isActive }) =>  `flex items-center gap-3 text-2xl font-medium border-b-2 pb-1 transition-all duration-500 leading-none ${isActive ? "text-[#C54300] border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"} hover:text-[#C54300]`}
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              <HiOutlineClipboardList className="text-2xl" /> Testimoni
            </NavLink>
          </div>
          <div className="mt-auto mb-4 px-6 w-full">
            <NavLink
              to="/kontak"
              onClick={toggleMenu}
              className={({ isActive }) =>  `block w-full py-2 bg-[#2D1F18] rounded-full text-center text-2xl font-semibold hover:bg-[#C54300] transition-colors border-2 shadow-md ${isActive ? "border-[#C54300]" : "border-transparent hover:text-[#EAAE8F]"}`} style={{ fontFamily: '"Cormorant Garamond", serif' }}
>
              Hubungi <span className="text-[#C54300]">Kami</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}