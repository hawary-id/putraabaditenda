import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Footer(second) {
    const { categories } = usePage().props;
    const phoneNumber = '6285777558494';
    const [message, setMessage] = useState('Halo, saya tertarik dengan produk dari CV Putra Abadi Tenda');
    const [waShow,setWaShow] = useState(false);
    
    const handleCategoryClick = (category) => {
        router.get(route('product',{category}))
    }

    const handleWhatAppClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <section className="relative w-full">
            <div className="w-full p-5 bg-gray-700">
                <div className="container w-full mx-auto">
                    <div className="flex flex-col gap-5 md:flex-row md:gap-0">
                        <div className="w-full md:w-2/5">
                            <div className="flex gap-3">
                                <img src="/asset/logo-white.png" className="h-6 md:pb-1 md:h-10" alt="" />
                                <div className="text-xl font-semibold text-white md:text-4xl">PUTRA ABADI TENDA</div>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <div className="bi-geo-alt-fill"></div>
                                <div className="">Ds. Ciangir RT 01 RW 04 Kec. Legok, Kab. Tangerang - Indonesia</div>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <div className="bi-whatsapp"></div>
                                <div className="">0857-7755-8494</div>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <div className="bi-envelope"></div>
                                <div className="">info@putraabaditenda.com</div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/5">
                            <div className="mb-1 text-lg font-semibold text-white">Link Cepat</div>
                            <ul className="text-gray-400">
                                <li>
                                    <Link href={route('home')} className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Beranda</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('aboutUs')} className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Tentang Kami</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('product')} className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Produk</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route('contact')} className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Kontak</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/5">
                            <div className="mb-1 text-lg font-semibold text-white">Kategori Produk</div>
                            <ul className="text-gray-400">
                                {categories.map((item) => (
                                    <li key={item.id}>
                                        <button onClick={() => handleCategoryClick(item.slug)} className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                            <span className="bi-chevron-right"></span>
                                            <div className="">{item.name}</div>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-center w-full text-right md:items-end md:w-1/5">
                            <div className="mb-1 font-light text-gray-300">Ikuti kami di media sosial</div>
                            <div className="flex items-center mb-4 space-x-5">
                                <a href="https://www.youtube.com/@putraabadi-hq7nf" target="_BLANK" className="text-4xl text-gray-200 hover:text-white active:text-white bi-youtube"></a>
                                <a href="https://www.facebook.com/profile.php?id=100090916146300" target="_BLANK" className="text-4xl text-gray-200 hover:text-white active:text-white bi-facebook"></a>
                                <a href="https://www.instagram.com/distributor_tenda_dan_trpal/?utm_source=qr&igsh=cXdmeDVyZ2Fkc3l0" target="_BLANK" className="text-4xl text-gray-200 hover:text-white active:text-white bi-instagram"></a>
                            </div>
                            <PrimaryButton href={route('contact')}>Kontak Kami</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-2 mx-auto font-light text-center text-gray-300 bg-blue-600">
                Copyright © 2024 Putra Abadi Tenda. All right Reserved
            </div>
            <div className={`fixed w-full px-3 md:w-96 md:right-3 transition-all ease-in-out duration-300 ${waShow ? 'bottom-24' : '-bottom-64'}`}>
                <div className="overflow-hidden rounded-md shadow-md">
                    <div className="flex flex-col justify-between w-full h-64 bg-slate-300">
                        <div className="relative p-3 m-5 text-gray-800 bg-white rounded-md w-fit md:m-5">
                            <div className="absolute z-10 w-5 h-5 rotate-45 bg-white top-1 -left-1"></div>
                            <p className="px-1 text-gray-800">Hallo, ada yang bisa kami bantu?</p>
                        </div>
                        <div className="relative w-full">
                            <TextInput
                                placeholder="Ketik pesan"
                                className="block w-full px-5 py-3 rounded-none focus:ring-0 active:ring-0 focus:border-none"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button className="absolute text-xl bi-send right-4 top-[12px] hover:text-emerald-600 focus:text-emerald-600 active:text-emerald-600" onClick={handleWhatAppClick}></button>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={() => setWaShow((prevShow) => !prevShow)}
                className={`fixed px-3 py-[10px] duration-300 text-3xl text-gray-100 rounded-full hover:text-white hover:bg-emerald-600 active:text-white active:bg-emerald-700 bottom-3 md:bottom-5 right-3 md:right-5 bg-emerald-500 hover:ring-2 hover:ring-emerald-300 hover:ring-offset-2 active:ring-2 active:ring-emerald-300 active:ring-offset-2 transition-all ease-in-out ${waShow ? 'bi-x-lg': 'bi-whatsapp'}`}>

            </button>
        </section>
    )
}