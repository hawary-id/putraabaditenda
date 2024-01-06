import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function Footer(second) {
    return (
        <section className="relative w-full">
            <div className="w-full p-5 bg-gray-700">
                <div className="container w-full mx-auto">
                    <div className="flex">
                        <div className="w-2/5 h-32">
                            <div className="text-4xl font-semibold text-white">CV PUTRA ABADI TENDA</div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <div className="bi-geo-alt-fill"></div>
                                <div className="">Kp. Puri Harmoni Cikasungka</div>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <div className="bi-whatsapp"></div>
                                <div className="">0857-7553-9967</div>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <div className="bi-envelope"></div>
                                <div className="">info@putraabaditenda.com</div>
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="mb-1 text-lg font-semibold text-white">Link Cepat</div>
                            <ul className="text-gray-400">
                                <li>
                                    <Link className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Beranda</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Tentang Kami</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Produk</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Kontak</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/5">
                            <div className="mb-1 text-lg font-semibold text-white">Kategori Produk</div>
                            <ul className="text-gray-400">
                                <li>
                                    <Link className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Beranda</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Tentang Kami</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Produk</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center space-x-1 transition-all ease-in-out hover:text-white active:text-white w-fit">
                                        <span className="bi-chevron-right"></span>
                                        <div className="">Kontak</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-end w-1/5 text-right">
                            <div className="mb-1 font-light text-gray-300">Ikuti kami di media sosial</div>
                            <div className="flex items-center mb-4 space-x-5">
                                <Link href="" className="text-4xl text-gray-200 hover:text-white active:text-white bi-facebook"></Link>
                                <Link href="" className="text-4xl text-gray-200 hover:text-white active:text-white bi-instagram"></Link>
                            </div>
                            <PrimaryButton>Kontak Kami</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-2 mx-auto font-light text-center text-gray-300 bg-blue-600">
                Copyright © 2024 CV Putra Abadi Tenda. All right Reserved
            </div>
            <button className="fixed px-3 py-[10px] text-4xl text-gray-100 rounded-full hover:text-white hover:bg-emerald-600 active:text-white active:bg-emerald-700 bottom-5 right-5 bg-emerald-500 bi-whatsapp hover:ring-2 hover:ring-emerald-300 hover:ring-offset-2 active:ring-2 active:ring-emerald-300 active:ring-offset-2 transition-all ease-in-out"></button>
        </section>
    )
}