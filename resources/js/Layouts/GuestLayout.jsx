import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import Footer from '@/Parts/Footer';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Guest({ children }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        // Ganti 'G-WWDTRFW1JT' dengan ID pelacakan Google Analytics Anda yang sesungguhnya
        const trackingId = 'G-WWDTRFW1JT';
    
        // Membuat elemen script untuk menyertakan skrip Google Analytics
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        
        // Menambahkan elemen script ke body dokumen
        document.body.appendChild(script);
    
        // Menambahkan fungsi gtag ke window untuk menginisialisasi Google Analytics
        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', trackingId);
        };
      }, []);
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 sm:justify-between sm:pt-0">
            <Head>
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>
            <section className={`top-0 w-full z-50 bg-white fixed shadow-lg ${route().current('home') ? 'md:fixed':'sticky'}`}>
                <nav className="container flex items-center justify-between w-full px-3 py-2 mx-auto md:py-3 md:px-0">
                    <Link href={route('home')} className="flex items-center gap-3">
                        <ApplicationLogo className="pb-1 h-9"/>
                        <span className="hidden text-2xl font-bold text-blue-600 uppercase md:block">Putra Abadi Tenda</span>
                    </Link>
                    <ul className='hidden space-x-8 font-light text-gray-600 md:block'>
                        <NavLink href={route('home')} active={route().current('home')}>Beranda</NavLink>
                        <NavLink href={route('aboutUs')} active={route().current('aboutUs')}>Tentang Kami</NavLink>
                        <NavLink href={route('product')} active={route().current('product') || route().current('productDetail')}>Produk</NavLink>
                        <NavLink href={route('contact')} active={route().current('contact')}>Kontak</NavLink>
                    </ul>
                    <button className="block px-2 py-1 text-lg border rounded md:hidden h-fit bi-list" onClick={() => setShow((prevShow) => !prevShow)}></button>
                </nav>
                <div className={`transition-all block md:hidden shadow-md ease-in-out duration-300 top-0 z-50 w-full p-3 bg-white fixed ${show ? 'translate-y-0 ' : '-translate-y-52'}`}>
                    <div className="flex justify-end w-full">
                        <div onClick={() => setShow((prevShow) => !prevShow)} className="flex items-center justify-center w-10 h-10 transition-all ease-in-out rounded-full bi-x-lg hover:bg-gray-200 focus:bg-gray-200 active:text-blue-600 hover:text-blue-600 focus:text-blue-600"></div>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <NavLink href={route('home')} active={route().current('home')}>Beranda</NavLink>
                        <NavLink href={route('aboutUs')} active={route().current('aboutUs')}>Tentang Kami</NavLink>
                        <NavLink href={route('product')} active={route().current('product') || route().current('productDetail')}>Produk</NavLink>
                        <NavLink href={route('contact')} active={route().current('contact')}>Kontak</NavLink>
                    </div>
                </div>
            </section>
            <div className="w-full bg-white grow">
                {children}
            </div>
            <Footer/>
        </div>
    );
}
