import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <div className='flex min-h-screen'>
            <main className='flex-initial'>
                <Navbar />
                {children}
                <Footer />
            </main>
        </div>
        );
}