import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Monika Dzierzanowska Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className="h-screen w-screen flex justify-center items-center bg-lightbg">
                    <h1 className="font-playlist text-6xl text-center">Monika Dzierzanowska</h1>
                </div>
            </div>
        </>
    );
}
