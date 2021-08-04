import Head from 'next/head';
// i18n
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Components
import LandingPage from '../components/LandingPage';
import AboutMe from '../components/AboutMe';
import PortfiolioPreview from '../components/PortfiolioPreview';

export default function Home() {
    return (
        <>
            <Head>
                <title>Monika Dzierzanowska Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LandingPage />
            <AboutMe />
            <PortfiolioPreview />
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            // Will be passed to the page component as props
        },
    };
}
