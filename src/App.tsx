import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import ServicePage from './pages/services/ServicePage'
import Portfolio from './pages/portfolio/Portfolio'
import Technologies from './pages/technologies/Technologies'
import Founder from './pages/founder/Founder'
import Contact from './pages/contact/Contact'
import Booking from './pages/booking/Booking'
import Industries from './pages/industries/Industries'
import Careers from './pages/careers/Careers'
import Blog from './pages/blog/Blog'
import Terms from './pages/terms/Terms'
import Privacy from './pages/privacy/Privacy'

function AppRoutes() {
  const location = useLocation();
  const isFocal = location.pathname.startsWith('/focal');
  return (
    <>
      {!isFocal && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-discovery-call" element={<Booking />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      {!isFocal && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
