import React from 'react';
import Link from 'next/link';
// i18n trsanslations hook
import { useTranslation } from 'next-i18next';

const Dropdown = ({ isOpen }) => {
    // Hook that allows me to use nexti18next translations
    const { t } = useTranslation('common');
    return (
        <div
            className={`absolute transition-all duration-1000 z-40 ${
                isOpen ? 'top-0 left-0 right-0' : '-top-full left-0 right-0'
            }`}
        >
            <ul className="grid grid-rows-4 text-center items-center py-10 font-mali font-medium text-lg bg-darkpink">
                <li className="p-4">
                    <Link href="/">
                        <a>{t('Home')}</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="">
                        <a>{t('About Me')}</a>
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio" className="">
                        <a>{t('Portfolio')}</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="">
                        <a>{t('Contact')}</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;
