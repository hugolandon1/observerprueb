'use client'
import { motion } from 'framer-motion'
import Ncard from './Ncard'
import { useState } from 'react'

const images = [
    {
        id: "1",
        src: "https://iili.io/dARWtv1.webp",
    },
    {
        id: "2",
        src: "https://iili.io/dAYGiUN.webp",
    },
    {
        id: "3",
        src: "https://iili.io/dA5IVJ2.webp",
    }
]

const CardBanner = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='flex justify-center overflow-hidden'
        >
            {images.map((image, index) => (
                <li key={index}>
                    <Ncard className1={`${isVisible ? "backdrop-blur-none" : "backdrop-filter backdrop-blur-md bg-white/30"}`} className={`transition cubic-bezier(0.4, 0, 0.6, 1) delay-150 duration-700 will-change-transform ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-5 "}`} isVisible={isVisible}
                setIsVisible={setIsVisible} imag={index} />
                </li>
                
            ))}
            
        </motion.div>
    )
}

export default CardBanner