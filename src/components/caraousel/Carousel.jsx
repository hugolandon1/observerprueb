'use client';

import Image from 'next/image';
import { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    
    return (
        <div className="relative mx-auto overflow-hidden border border-gray-300">
            <button
                className="absolute z-10 top-1/2 transform -translate-y-1/2 left-4 bg-[#7770] text-white p-2 rounded-full"
                onClick={goToPrevious}
            >
                <svg width="56" className="bg-[#6770] stroke-white hover:stroke-black" height="100" viewBox="0 0 56 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M52 2L4 104.273L52 189"  stroke-width="2" stroke-linejoin="round" />
                </svg>

            </button>
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="flex justify-center items-center min-w-full " key={index}>
                        <Image src={image} alt={`Slide ${index}`} width={500} height={500} className="w-[1600px] h-[1300px] " />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-[#7770] text-white p-2 rounded-full"
                onClick={goToNext}
            >
                <svg width="56" className='bg-[#6770] stroke-white hover:stroke-black' height="100" viewBox="0 0 56 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 2L52 104.273L4 189" stroke-width="2" stroke-linejoin="round" />
                </svg>

            </button>
        </div>
    );
};

export default Carousel;