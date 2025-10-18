import { NavLink } from 'react-router-dom'
import './NavigationBar.css'

export function NavigationBar() {
  return (
    <nav className="nav-bar fixed mt-3 bg-linear-0 from-[#3C261A]/95 to-[#4d3123]/95 z-50 left-1/2 -translate-x-1/2 w-7xl mx-auto flex items-center justify-between px-2.5 backdrop-blur-sm shadow-md py-0.5 rounded-full">

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
  )
}