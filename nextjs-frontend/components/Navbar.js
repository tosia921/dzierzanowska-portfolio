import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Dropdown from './Dropdown';
import Hamburger from './Hamburger';
// i18n trsanslations hook

const Navbar = () => {
    // setting state for opened or closed mobile dropdown menu
    const [isOpen, setIsOpen] = useState(false);
    // Hook that allows me to use nexti18next translations
    const { t } = useTranslation('common');
    return (
        <>
            <nav className="bg-lightbg p-5">
                <ul className="hidden md:flex md:justify-center md:items-center font-mali font-bold text-lg z-10 relative">
                    <li className="pr-4">
                        <Link href="/" className="p-4">
                            <a>{t('Home')}</a>
                        </Link>
                    </li>
                    <li className="pr-4">
                        <Link href="/about" className="p-4">
                            <a>{t('About Me')}</a>
                        </Link>
                    </li>
                    <li className="pr-4">
                        <Link href="/portfolio" className="p-4">
                            <a>{t('Portfolio')}</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="p-4">
                            <a>{t('Contact')}</a>
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
