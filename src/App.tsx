import { MotionConfig } from 'framer-motion'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServicesMosaic } from './components/ServicesMosaic'
import { MidCta } from './components/MidCta'
import { WhyChooseUs } from './components/WhyChooseUs'
import { HowItWorks } from './components/HowItWorks'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <ServicesMosaic />
        <MidCta />
        <WhyChooseUs />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  )
}

export default App
