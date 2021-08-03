import Link from 'next/link';
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Hamburger from './Hamburger';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="bg-lightbg p-5">
                <ul className="hidden md:flex md:justify-center md:items-center font-mali font-bold text-lg z-10 relative">
                    <li className="pr-4">
                        <Link href="/" className="p-4">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="pr-4">
                        <Link href="/about" className="p-4">
                            <a>About Me</a>
                        </Link>
                    </li>
                    <li className="pr-4">
                        <Link href="/portfolio" className="p-4">
                            <a>Portfolio</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="p-4">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            </nav>
            <Dropdown isOpen={isOpen} />
        </>
    );
};

export default Navbar;
