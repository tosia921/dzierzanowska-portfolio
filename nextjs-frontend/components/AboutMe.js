import React from 'react';

const AboutMe = () => {
    return (
        <section className="h-screen bg-lightpink flex justify-center items-center">
            <div className="px-6 md:px-10 lg:px-20 xl:px-40">
                <div className="relative">
                    <h2 className="font-playlist text-center text-5xl lg:text-6xl xl:text-7xl pb-12 z-10 relative">
                        About Me
                    </h2>
                    <img
                        src="/assets/images/brushWhite.svg"
                        alt="An SVG of an white paint brush"
                        className="absolute center-absolute-about-me w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] xl:w-[25vw]"
                    />
                </div>
                <p className="font-mali text-center text-textcolor">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
