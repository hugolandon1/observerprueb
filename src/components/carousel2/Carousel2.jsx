'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import Image from 'next/image'


const images = [
  {
    src: "https://iili.io/dxk3Ojj.png",
  },
  {
    src: "https://iili.io/dxk3eZx.png",
  },
  {
    src: "https://iili.io/dxk3NTb.png"
  }
]


const Carousel2 = () => {
  
  const [sliderRef, instanceRef] = useKeenSlider(
    {

      slideChanged() {
        console.log('slide changed')

      },
    },
    [
      // add plugins here
    ]
  )

  return (
    <div ref={sliderRef} className= "flex overflow-hidden w-full bg-slate-600"  >

      {images.map((image, index) => (
        <div key={index} className="keen-slider__slide w-full h-full flex justify-center">
          <Image className='w-full ' src={image.src} width={1500} height={1500} alt='esto' />
        </div>
      ))}
    </div>
  )
}

export default Carousel2;