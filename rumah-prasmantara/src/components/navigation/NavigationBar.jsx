import { NavLink } from 'react-router-dom'
import './NavigationBar.css'

export function NavigationBar() {
  return (
    <nav className="mt-3 bg-[#3C261A]/95 max-w-7xl mx-auto flex items-center justify-between px-2.5 backdrop-blur-sm shadow-md py-0.5 rounded-full">
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition-all duration-200 font-semibold border-b-2 leading-none ${isActive ? "text-[#EAAE8F] border-[#C54300]" : "border-transparent hover:border-[#EAAE8F]"
            }`
          }
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Beranda
        </NavLink>
        <NavLink
          to="/tentang"
          className={({ isActive }) =>
            `transition-all duration-200 font-medium border-b-2 leading-none ${isActive ? "text-[#EAAE8F] border-[#C54300]" : "border-transparent hover:border-[#EAAE8F]"
            }`
          }
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Tentang Kami
        </NavLink>
        <NavLink
          to="/produk"
          className={({ isActive }) =>
            `transition-all duration-200 font-medium border-b-2 leading-none ${isActive ? "text-[#EAAE8F] border-[#C54300]" : "border-transparent hover:border-[#EAAE8F]"
            }`
          }
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Produk
        </NavLink>
        <NavLink
          to="/testimoni"
          className={({ isActive }) =>
            `transition-all duration-200 font-medium border-b-2 leading-none ${isActive ? "text-[#EAAE8F] border-[#C54300]" : "border-transparent hover:border-[#EAAE8F]"
            }`
          }
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Testimoni
        </NavLink>
      </div>
      {/* Navigation Button */}
      <NavLink
        to="/kontak"
        className={({ isActive }) => ` ml-4 px-8 py-2 text-2xl rounded-full font-semibold bg-[#2D1F18]/80 text-[#EAAE8F] border-3 shadow-md ${isActive ? "border-[#C54300]" : "border-transparent hover:border-[#EAAE8F]"} transition-all `}
        style={{ fontFamily: '"Cormorant Garamond", serif' }}
      >
        Hubungi <span className='text-[#C54300]'>Kami</span>
      </NavLink>

    </nav>
  )
}