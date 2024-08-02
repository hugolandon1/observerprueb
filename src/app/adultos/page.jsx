'use client'
import Card from '@/components/card/Card';
import { motion } from 'framer-motion'
import { getStore } from '@/components/llamadas/llamada';
import CardBanner from '@/components/ncard/CardBanner';





const Adultos = async () => {
  const adultos = await getStore();
  return (
    <div className='flex flex-col gap-5'>

      <CardBanner />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex flex-wrap justify-center flex-colum'
      >
        {adultos.map((adulto) => (
          <li key={adulto.title}>
            <Card imag={adulto.src} />
          </li>
        ))} 

      </motion.div>

    </div>
  )
}

export default Adultos;