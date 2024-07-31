'use client'
import Card from '@/components/card/Card';
import { useState } from 'react';
import Ncard from '@/components/ncard/Ncard';
import { motion } from 'framer-motion'
import Image from 'next/image';

const Adultos = () => {
 const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='flex flex-col gap-5'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex justify-center overflow-hidden'
      >
        <Ncard className1={`${isVisible ? "backdrop-blur-none" : "backdrop-filter backdrop-blur-md bg-white/30"}`} className={`transition cubic-bezier(0.4, 0, 0.6, 1) delay-150 duration-700 will-change-transform ${isVisible ? "scale-100 opacity-100" : "scale-50 "}`} isVisible={isVisible} 
                setIsVisible={setIsVisible} imag="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1900&h=1267"/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex justify-center'
      >
        <Card imag="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1900&h=1267"/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex justify-center'
      >
        <Card imag="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1900&h=1267"/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex justify-center'
      >
        <Card imag="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1900&h=1267"/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex justify-center'
      >
        <Card imag="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1900&h=1267"/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex justify-center'
      >
        <Card imag="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1900&h=1267"/>
      </motion.div>
    </div>
  )
}

export default Adultos;