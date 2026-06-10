import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Works } from './components/sections/Works'
import { Pricing } from './components/sections/Pricing'
import { Reviews } from './components/sections/Reviews'
import { TipsFaq } from './components/sections/TipsFaq'
import { CtaBanner } from './components/sections/CtaBanner'
import './styles/globals.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Pricing />
        <Reviews />
        <TipsFaq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
