import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import Footer from '@/Parts/Footer';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-between sm:pt-0">
            <section className={`top-0 w-full z-50 bg-white shadow-lg ${route().current('home') ? 'fixed':'sticky'}`}>
                <nav className="container flex items-center justify-between py-3 mx-auto">
                    <div className="flex items-center gap-3">
                    {/* <ApplicationLogo className="h-10"/> */}
                    <span className="text-2xl font-bold text-blue-600 uppercase">Putra Abadi Tenda</span>
                    </div>
                    <ul className='space-x-8 font-light text-gray-600'>
                        <NavLink href={route('home')} active={route().current('home')}>Beranda</NavLink>
                        <NavLink href={route('aboutUs')} active={route().current('aboutUs')}>Tentang Kami</NavLink>
                        <NavLink href={route('product')} active={route().current('product') || route().current('productDetail')}>Produk</NavLink>
                        <NavLink href={route('contact')} active={route().current('contact')}>Kontak</NavLink>
                    </ul>
                </nav>
            </section>
            <div className="w-full bg-white grow">
                {children}
            </div>
            <Footer/>
        </div>
    );
}
