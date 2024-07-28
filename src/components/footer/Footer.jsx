import Link from 'next/link'
import { links } from '../links/Links'


const Footer = () => {
    return (
        <div className='flex bg-yellow-300 flex-col justify-center items-start pl-10 h-40'>
            {links.map((link) => (
                <li className='bg-transparent' key={link.title}>
                    <Link className='bg-transparent' href={link.href}>
                        {link.title}
                    </Link>
                </li>
            ))}
        </div>
    )
}

export default Footer