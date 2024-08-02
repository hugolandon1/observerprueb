'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { links } from "../links/Links"
import { SvgHome } from "../svg/Svg"



const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const pathName = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);


    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1}}
            className={`fixed justify-center w-full z-10 h-16 flex items-center gap-2 transition-all ease-in-out duration-1000 ${isScrolled ? 'bg-slate-600 backdrop-blur bg-opacity-40' : 'bg-[#272c2da5] bg-opacity-10'}`}
        >
            <div className={`bg-[#7770] transition ease-in-out delay-[400ms] duration-700 ${isScrolled ? 'translate-x-[-26rem]' : 'translate-x-0' } `}>
                <Link href="/">
                <SvgHome />
                </Link>
            </div>
            {links.map((link) => (
                <li
                    className={`bg-transparent transition ease-in-out delay-150 duration-700 ${isScrolled ? 'text-[#fec3ff] translate-x-[26rem]' : 'text-[#f3f3f3] translate-x-0'}`}
                    key={link.title}
                >
                    <Link
                        className={`bg-transparent transition-all duration-300 ${pathName === link.href ? 'bg-green-400 font-bold' : ''}`}
                        href={link.href}
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </motion.div>
    );
}

export default Header