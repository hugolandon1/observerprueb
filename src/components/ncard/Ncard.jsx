'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";

const Ncard = ({ imag, className = "", className1 = "", setIsVisible }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);

            },
            {
                threshold: 0.1
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [setIsVisible]);

    return (
        <div
            ref={cardRef}
            className={className}
        >
            <Image className={className1} src={imag} alt="fotin" width={1500} height={1500} />
        </div>
    );
}

export default Ncard;