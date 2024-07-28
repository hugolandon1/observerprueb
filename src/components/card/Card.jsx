'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react"

const Card = ({imag}) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { 
                root: document.querySelector('#esto'),
             } // La card se considera visible cuando el 10% está en el viewport
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={` flex transition cubic-bezier(0.4, 0, 0.6, 1) delay-150 duration-700 will-change-transform
             ${isVisible ? 'scale-100 cubic-bezier(0.4, 0, 0.6, 1) backdrop-blur ' : ' scale-[.60] backdrop-blur'}`}
                
        >
            <Image src={imag} alt="fotin" width={1500} height={1500} />
        </div>
    )
}

export default Card