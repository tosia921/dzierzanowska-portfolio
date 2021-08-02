import React from 'react';

const Hamburger = ({ isOpen, setIsOpen }) => {
    return (
        <button
            type="button"
            className={`c-hamburger c-hamburger--twist z-50 absolute top-0.5 right-1.5 md:hidden cursor-pointer ${
                isOpen ? 'active' : ''
            }`}
            onClick={() => {
                return setIsOpen(!isOpen);
            }}
        >
            <div className="c-hamburger-inner">
                <span className="c-hamburger-bar" />
                <span className="c-hamburger-bar" />
                <span className="c-hamburger-bar" />
            </div>
        </button>
    );
};

export default Hamburger;
