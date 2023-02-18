import { Hero } from './components/Hero'
import { About } from './components/About'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Contributors } from './components/Contributors'
import { ScrollToTopBtn } from './components/ScrollToTopBtn'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contributors />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTopBtn />
    </>
  )
}

export default App
