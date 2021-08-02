import React from 'react';
import Link from 'next/link';

const Dropdown = ({ isOpen }) => {
    return (
        <div
            className={`absolute transition-all duration-1000 z-40 ${
                isOpen ? 'top-0 left-0 right-0' : '-top-full left-0 right-0'
            }`}
        >
            <ul className="grid grid-rows-4 text-center items-center py-10 font-mali font-medium text-lg bg-darkpink">
                <li className="p-4">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="">
                        <a>About Me</a>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio" className="">
                        <a>Portfolio</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;
