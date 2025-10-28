import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { ProdukPage } from './pages/produk/ProdukPage';
import { TestimoniPage } from './pages/testimoni/TestimoniPage';
import { ContactPage } from './pages/contact/ContactPage';
import './App.css';
import { NavigationBar } from './components/navigation/NavigationBar';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  const location = useLocation();

  return (
    <>
      <NavigationBar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/produk" element={<ProdukPage />} />
        <Route path="/testimoni" element={<TestimoniPage />} />
        <Route path="/kontak" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
