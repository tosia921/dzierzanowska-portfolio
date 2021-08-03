import React from 'react';

const PortfiolioPreview = () => {
    return (
        <section className="min-h-screen bg-lightbg flex justify-center pt-28">
            <div className="px-6 md:px-10 lg:px-[15%] xl:px-[20%]">
                <div className="relative flex justify-center items-center w-80 sm:w-96 lg:w-[500px]">
                    <h2 className="font-playlist text-center text-5xl lg:text-6xl xl:text-7xl pb-12 z-10 relative flex">
                        Portfolio
                    </h2>
                    <img
                        src="/assets/images/brush.svg"
                        alt="An SVG of an paint brush"
                        className="absolute center-absolute-about-me w-[500px] sm:w-[340px] lg:w-[375px]"
                    />
                </div>
                <p className="font-mali text-center text-textcolor font-normal text-base md:text-lg lg:text-xl">
                    Future Content
                </p>
            </div>
        </section>
    );
};

export default PortfiolioPreview;
