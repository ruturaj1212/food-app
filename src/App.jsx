import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './assets/Components/Navbar'
import Hero from './assets/Components/Hero'
import Menu from './assets/Components/Menu'
import AboutSection from './assets/Components/AboutSection'
import Testimonials from './assets/Components/Testimonials'
import Footer from './assets/Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Menu></Menu>
    <AboutSection></AboutSection>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </>
  )
}

export default App
