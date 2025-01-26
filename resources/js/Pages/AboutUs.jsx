import PrimaryButton from "@/Components/PrimaryButton";
import Title from "@/Components/Title";
import Guest from "@/Layouts/GuestLayout";
import BreadCrumb from "@/Parts/Breadcrumb";
import Header from "@/Parts/Header";
import { Head, Link } from "@inertiajs/react";

export default function AboutUs(second) {
    const breadCrumbItem = [
        {
            label:'Beranda',
            url:'home'
        },
        {
            label:'Tentang Kami',
            url:'aboutUs'
        },
    ]

    const phoneNumber = '6285777558494';
    const message = 'Halo, saya tertarik dengan produk dari Putra ABadi Tenda.';

    const handleWhatAppClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    
    return(
        <Guest>
            <Head>
                <title>Tentang Kami | Penyedia Solusi Tenda dan Terpal TERMURAH dan TERBAIK di Tangerang</title>
                <meta name="description" content="Putra Abadi Tenda bukan sekadar penyedia produk; kami adalah solusi lengkap untuk semua kebutuhan Anda. Dengan bahan berkualitas tinggi, setiap pembelian dijamin sebagai investasi dalam kehandalan jangka panjang. Temukan koleksi produk beragam kami yang dirancang untuk memenuhi segala keperluan, mulai dari acara outdoor hingga petualangan alam yang menantang. Komitmen kami tidak hanya pada nilai harga, tetapi juga pada setiap detail produk yang kami tawarkan. Dengan harga bersaing, setiap pelanggan mendapatkan kombinasi sempurna antara kehandalan, gaya tak tertandingi, dan nilai yang melebihi harapan. Di Putra Abadi Tenda, kami tidak hanya menyediakan produk; kami menciptakan pengalaman yang memenuhi dan melampaui ekspektasi Anda." />
            </Head>
            <Header label="Tentang Kami" />
            <div className="pb-10 bg-gradient-to-b from-white to-gray-100 md:px-0">
                <BreadCrumb items={breadCrumbItem}/>
                <div className="container grid grid-cols-1 gap-6 px-3 mx-auto md:grid-cols-2">
                    <div className="order-last w-full md:order-first">
                        <Title label="Profil Perusahaan"/>
                        <p className="mb-2 text-justify text-gray-600 indent-8">
                            TENDA, JUAL Tenda, Produsen TENDA, Supplier TENDA, Tenda PROMO, TENDA KERUCUT, TENDA DOME, TENDA CAFE, TENDA PLETON, TENDA MOBIL, hp 085777558494
                        </p>
                        <Link href={route('home')} className="font-semibold text-blue-600 hover:text-blue-700">PUTRAABADITENDA.COM</Link>
                        <p className="my-2 text-justify text-gray-600 indent-8">
                            <span className="font-semibold text-blue-600">PUTRA ABADI TENDA</span> adalah Produsen dan Supplier aneka macam tenda dan perlengkapan pembuatan tenda dengan berbagai macam ukuran dan bahan yang bisa disesuaikan dengan permintaan kebutuhan.
                            Berbagai tenda yang kami produksi antara lain : tenda dome, tenda promo, tenda mobil, tenda cafe, tenda haji, tenda untuk resepsi pernikahan, tenda VIP, tenda sahara, tenda sarnafil / tenda kerucut, tenda pleton dll. Kami menyediakan berbagai bahan terpal pilihan untuk produksi tenda kami sehingga tenda yang kami produksi berkualitas. Jual Tenda, Pabrik Tenda, Tenda Murah.</p>
                        <p className="mb-5 text-justify text-gray-600 indent-8">Dengan pengalaman yang lebih dari 15 tahun dan kesungguhan untuk memberikan pelayanan terbaik bagi para konsumen, maka kami sangat dikenal baik oleh distributor dan pemakai langsung dari produk tenda kami. Kami siap melayani pembuatan / pemesanan aneka macam tenda dengan berbagai ukuran untuk didistribusikan ke seluruh Indonesia dengan harga yang sangat kompetitif dan kualitas yang tidak perlu diragukan lagi.</p>
                        <div className="flex justify-center w-full md:justify-start">
                        <PrimaryButton onClick={handleWhatAppClick}>
                            <span className="mr-2 text-xl bi-whatsapp"/>
                            <span>Pesan Sekarang</span>
                        </PrimaryButton>
                        </div>
                    </div>
                    <iframe className="w-full h-56 md:h-96 order-lafirstst md:order-last" src="https://www.youtube.com/embed/GZZoL2ib6us?si=5CKFoMpIW8LVMZAH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <div className="container p-3 py-5 mx-auto md:py-10 md:px-0">
                    <Title label="Visi dan Misi"/>
                    <div className="flex items-center gap-5 md:gap-24 md:grid-cols-2">
                        <div className="w-full md:w-3/4">
                            <div className="w-full p-4 mx-auto mb-5 bg-white border rounded-lg shadow-md md:p-6 md:mb-10">
                                <h2 className="mb-2 text-2xl font-semibold">Visi</h2>
                                <p className="text-justify text-gray-700">
                                    Menjadi solusi utama dan mitra terpercaya dalam memenuhi kebutuhan luar ruangan dengan menyediakan produk berkualitas tinggi dan pengalaman pelanggan yang luar biasa.
                                </p>
                            </div>
                            <div className="w-full p-4 mx-auto bg-white border rounded-lg shadow-md md:p-6">
                                <h2 className="mb-2 text-2xl font-semibold">Misi</h2>
                                <ul className="text-justify text-gray-700 list-disc list-inside">
                                    <li className="mb-2">Menyediakan produk berkualitas tinggi dengan bahan terbaik, menjadikan setiap pembelian investasi yang memberikan kehandalan jangka panjang.</li>
                                    <li className="mb-2">Merancang koleksi produk beragam yang tidak hanya stylish untuk acara luar ruangan, tetapi juga tangguh untuk petualangan alam yang menantang.</li>
                                    <li className="mb-2">Menyematkan komitmen pada nilai, tidak hanya terlihat dari segi harga, melainkan juga dalam setiap detail produk.</li>
                                    <li className="mb-2">Menciptakan pengalaman pelanggan yang luar biasa, memenuhi dan melampaui harapan setiap individu yang mempercayakan kebutuhan luar ruangan mereka kepada kami di PUTRA ABADI TENDA.</li>
                                </ul>
                            </div>
                        </div>
                        <img src="/asset/visi-dan-misi-putra-abadi-tenda.jpg" alt="" className="hidden w-1/4 md:block"/>
                    </div>
                    
                </div>
        </Guest>
    )
}