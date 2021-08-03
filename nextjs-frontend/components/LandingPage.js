import React from 'react';

const LandingPage = () => {
    return (
        <section className="relative">
            <div>
                <div className="homepage-height w-screen flex justify-center items-center bg-lightbg flex-col space-y-6 md:space-y-10">
                    <div className="relative">
                        <h1 className="font-playlist font-playscript text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center z-10 relative">
                            Monika Dzierzanowska
                        </h1>
                        <img
                            src="/assets/images/brush.svg"
                            alt="An SVG of an paint brush"
                            className="hidden sm:block absolute -top-2 sm:top-[-20px] sm:left-0 lg:left-8 xl:scale-150 xl:top-[-10px] xl:left-[170px]"
                        />
                    </div>
                    <h2 className="font-mali italic font-light text-2xl lg:text-3xl z-10">Artist & Illustrator</h2>
                </div>
            </div>
            <img
                src="/assets/images/brush.svg"
                alt="An SVG of an paint brush"
                className="sm:hidden absolute top-[-100px] left-[-230px] rotate-45"
            />
            <img
                src="/assets/images/brush.svg"
                alt="An SVG of an paint brush"
                className="sm:hidden absolute bottom-[-10px] right-[-230px] rotate-45"
            />
        </section>
    );
};

export default LandingPage;
