import * as React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import { ToastProvider } from "./components/Toast"

function App() {
  return (
    <div className='bg-black min-h-screen'>
      <ToastProvider>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </ToastProvider>
    </div>
  )
}

export default App
