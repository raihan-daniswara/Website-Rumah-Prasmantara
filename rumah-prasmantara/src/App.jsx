import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { AboutPage } from './pages/about/AboutPage'
import { ProdukPage } from './pages/produk/ProdukPage'
import { TestimoniPage } from './pages/testimoni/TestimoniPage'
import { ContactPage } from './pages/contact/ContactPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/tentang' element={<AboutPage />} />
      <Route path='/produk' element={<ProdukPage />} />
      <Route path='/testimoni' element={<TestimoniPage />} />
      <Route path='/kontak' element={<ContactPage />} />
    </Routes>
  )
}

export default App
