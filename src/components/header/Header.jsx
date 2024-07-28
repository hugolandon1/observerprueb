'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from 'react'
import { links } from "../links/Links"



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
        <div className={` fixed w-full z-10 h-16  flex justify-center items-center gap-2 transition-all ease-in-out duration-700 ${isScrolled ? 'bg-slate-600 backdrop-blur bg-opacity-40' : "bg-gradient-to-r from-[#b9b4ff97] to-[#b4efffa5] bg-opacity-10 "}`}>
            {links.map((link) => (
                <li className={`bg-transparent transition-all duration-300 ${isScrolled ? 'text-[#fec3ff] transition-all' : "text-[#252525]"}`} key={link.title}>
                    <Link className={`bg-transparent transition-all duration-300 ${pathName === link.href ? 'bg-green-400 font-bold' : ''}`} href={link.href}>
                        {link.title}
                    </Link>
                </li>
            ))}
        </div>
    )
}

export default Header