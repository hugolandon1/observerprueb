'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const Carousel3 = () => {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla w-full" ref={emblaRef}>
            <div className="w-full overflow-hidden flex justify-center">
                <div className="w-full flex">
                    <Image src="https://iili.io/dxk3Ojj.png" width={500} height={500} alt='esto es' />
                </div>
                <div className="">
                    <Image src="https://iili.io/dxk3Ojj.png" width={500} height={500} alt='esto es' />
                </div>
                <div className="">
                    <Image src="https://iili.io/dxk3Ojj.png" width={500} height={500} alt='esto es' />
                </div>
            </div>
        </div>
    )
}

export default Carousel3;