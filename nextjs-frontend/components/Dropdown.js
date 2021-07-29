import React from 'react';
import Link from 'next/link';

const Dropdown = () => (
    <div>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>
            <li>
                <Link href="/blog/hello-world">
                    <a>Blog Post</a>
                </Link>
            </li>
        </ul>
    </div>
);

export default Dropdown;
