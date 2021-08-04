import '../styles/tailwind.css';
// i18n
import { appWithTranslation } from 'next-i18next';
// components
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default appWithTranslation(MyApp);
