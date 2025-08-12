import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Alasan from './components/Alasan'
import Gejala from './components/Gejala'
import Pengaruh from './components/Pengaruh'
import Dampak from './components/Dampak'
import Quotes from './components/Quotes'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Alasan />
      <Gejala />
      <Pengaruh />
      <Dampak />
      <Quotes />
      <Footer />
    </div>
  )
}

export default App
