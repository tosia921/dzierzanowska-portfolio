import React from 'react';
// i18n trsanslations hook
import { useTranslation } from 'next-i18next';

const AboutMe = () => {
    // Hook that allows me to use nexti18next translations
    const { t } = useTranslation('common');
    return (
        <section className="h-screen bg-lightpink flex justify-center items-center z-40 relative">
            <div className="px-6 md:px-10 lg:px-[15%] xl:px-[20%]">
                <div className="relative flex justify-center items-center">
                    <h2 className="font-playlist text-center text-5xl lg:text-6xl xl:text-7xl pb-12 z-10 relative flex">
                        {t('About Me')}
                    </h2>
                    <img
                        src="/assets/images/brushWhite.svg"
                        alt="An SVG of an white paint brush"
                        className="absolute center-absolute-about-me w-[290px] sm:w-[340px] lg:w-[375px]"
                    />
                </div>
                <p className="font-mali text-center text-textcolor font-normal text-base md:text-lg lg:text-xl">
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
