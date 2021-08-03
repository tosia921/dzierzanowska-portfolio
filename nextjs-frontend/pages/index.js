import Head from 'next/head';
// Components
import LandingPage from '../components/LandingPage';
import AboutMe from '../components/AboutMe';

export default function Home() {
    return (
        <>
            <Head>
                <title>Monika Dzierzanowska Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LandingPage />
            <AboutMe />
        </>
    );
}
