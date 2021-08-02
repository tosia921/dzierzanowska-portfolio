import Head from 'next/head';

export default function Home() {
    return (
        <main className="relative">
            <Head>
                <title>Monika Dzierzanowska Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className="homepage-height w-screen flex justify-center items-center bg-lightbg flex-col space-y-10 md:space-y-10">
                    <div className="relative">
                        <h1 className="font-playlist font-playscript text-6xl md:text-7xl lg:text-8xl text-center z-10 relative">
                            Monika Dzierzanowska
                        </h1>
                        <img
                            src="/assets/images/brush.svg"
                            alt="An SVG of an paint brush"
                            className="hidden sm:block absolute -top-2 sm:-top-1/4 sm:left-0 lg:left-8"
                        />
                    </div>
                    <h2 className="font-mali italic font-light text-2xl md:text-3xl lg:text-4xl z-10">
                        Artist & Illustrator
                    </h2>
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
        </main>
    );
}
