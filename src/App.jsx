import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import myImage from './assets/Myimg.png'
import Work from './Work'

const roles = ["MERN Stack Developer", "Software Developer"]

function AnimatedRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    //UI UX
    <AnimatePresence mode="wait">
      <motion.h2
        key={roles[index]}
        className="text-xl md:text-2xl font-light mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        {roles[index]} | UI/UX Enthusiast
      </motion.h2>
    </AnimatePresence>
  )
}

function App() {
  const [showWork, setShowWork] = useState(false)
useEffect(() => {
    const handler = () => setShowWork(false)
    window.addEventListener("goHome", handler)
    return () => window.removeEventListener("goHome", handler)
  }, [])
  
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-r text-white">
        <div className="flex items-center space-x-3">
          <div className="relative w-14 h-14 rounded-full ring-2 ring-yellow-300 shadow-lg animate-pulse">
            <img
              src={myImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
              loading="eager"
            />
          </div>
          <span className="text-xl font-semibold tracking-wide">SDE</span>
        </div>
        <ul className="flex space-x-6 text-sm md:text-base font-medium">
          <li><a href="#home" className="hover:text-yellow-100 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-100 transition">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-100 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-100 transition">Contact</a></li>
        </ul>
      </nav>

      {showWork ? (
        <Work />
      ) : (
        <div id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white px-6 text-center pt-24">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hritik Ukey
          </motion.h1>

          <AnimatedRole />

          <motion.button
            onClick={() => setShowWork(true)}
            className="bg-white text-purple-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </div>
      )}
    </>
  )
}

export default App
