import PrimaryButton from '@/Components/PrimaryButton';
import SecondButton from '@/Components/SecondButton';
import Guest from '@/Layouts/GuestLayout';
import CardCategory from '@/Parts/CardCategory';
import { Link, Head } from '@inertiajs/react';

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <Guest>
               <div className="flex flex-col h-screen">
                    <section className="w-full h-full bg-cover bg-[url('/asset/hiro.png')]">
                        <div className="container flex flex-col items-center justify-center h-full mx-auto text-center">
                            <h1 className="mb-6 text-6xl font-bold text-white uppercase">CV PUTRA ABADI TENDA</h1>
                            <p className="text-3xl font-light text-gray-300">
                                Pusat penjualan berbagai jenis tenda dan produksi siap pakai terlengkap!
                            </p>
                            <p className="text-3xl font-light text-gray-300">
                                Hadir dengan harga termurah untuk memenuhi setiap aplikasi dan
                            </p>
                            <p className="mb-16 text-3xl font-light text-gray-300">
                                kebutuhan Anda
                            </p>
                            <SecondButton className="block px-6 py-3 font-bold text-center text-blue-600 uppercase transition duration-150 ease-in-out rounded-md bg-white/90 hover:bg-white active:bg-white focus:bg-white focus:text-blue-700 hover:text-blue-700 active:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ">Pesan Sekarang</SecondButton>
                        </div>
                    </section>
                    <section className='w-full py-6 bg-blue-500'>
                        <div className="container flex justify-around mx-auto">
                            <div className="flex flex-col items-center gap-3">
                                <img src='/asset/icon-premium.svg' className='h-12' alt=""/>
                                <div className="w-32 font-semibold text-center text-white uppercase">Kualitas Premium</div>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img src='/asset/icon-size.svg' className='h-12' alt=""/>
                                <div className="w-32 font-semibold text-center text-white uppercase">Beragam Jenis & Ukuran</div>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img src='/asset/icon-price.svg' className='h-12' alt=""/>
                                <div className="w-32 font-semibold text-center text-white uppercase">Harga Terjangkau</div>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img src='/asset/icon-design.svg' className='h-12' alt=""/>
                                <div className="w-32 font-semibold text-center text-white uppercase">Desain Tenda Inovatif</div>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img src='/asset/icon-protect.svg' className='h-12' alt=""/>
                                <div className="w-32 font-semibold text-center text-white uppercase">Proteksi dari cuaca buruk</div>
                            </div>
                        </div>
                    </section>
               </div>
                <section className="w-full py-10 bg-gray-100">
                    <div className="container flex justify-between mx-auto">
                        <div className="flex justify-center w-3/5">
                        <img src="/asset/image-about-us.png" alt="" className='h-80'/>
                        </div>
                        <div className="flex flex-col w-2/5 text-right">
                            <div className="text-5xl font-semibold">Kenapa Harus</div>
                            <span className='mb-5 text-5xl font-semibold text-blue-500'>CV PUTRA ABADI TENDA?</span>
                            <p className="mb-3 text-xl text-gray-600"><span className='font-bold text-gray-800'>
                                CV PUTRA ABADI TENDA</span> adalah solusi singkat untuk kebutuhan anda. Dengan bahan berkualitas tinggi, koleksi produk yang beragam, dan harga yang bersaing, kami memastikan setiap pelanggan mendapatkan kombinasi sempurna antara kehandalan, gaya, dan nilai.
                            </p>
                            <div className="justify-end">
                                <PrimaryButton className="w-fit" href={route('aboutUs')}>Selengkapnya</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container w-full py-10 mx-auto bg-white'>
                    <h2 className="mb-6 text-4xl font-semibold text-center text-gray-800">Temukan Berbagai Produk Tenda Terbaik Kami </h2>
                    <div className="flex mb-10 space-x-8">
                        <CardCategory/>
                    </div>
                    <div className="flex justify-center w-full">
                        <PrimaryButton className="px-6">Semua Produk</PrimaryButton>
                    </div>
                </section>
                <section className="w-full py-10 bg-gray-100 h-96">
                    <h2 className="mb-6 text-4xl font-semibold text-center text-gray-800">Apa kata klien kami? </h2>
                    <div className="container flex mx-auto space-x-8 text-center">
                        <div className="p-5 bg-white rounded-md shadow-md w-[30rem]">
                            <div className="flex items-center justify-center w-full mb-3 space-x-2">
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-half"></span>
                            </div>
                            <p className="mb-3 font-light text-gray-600">
                                "Salah satu project divisi marcomm kami adalah men-supply showroom kendaraan bermotor rekanan kami dengan tenda piramid berbagai ukuran untuk ditempatkan di depan showroom sebagai media bantu promosi."
                            </p>
                            <div className="text-xl font-semibold text-gray-800">Joko Widodo</div>
                            <div className="italic font-light text-gray-500">Perusahaan Leasing Otomotif</div>
                        </div>
                        <div className="p-5 bg-white rounded-md shadow-md w-[30rem]">
                            <div className="flex items-center justify-center w-full mb-3 space-x-2">
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-half"></span>
                            </div>
                            <p className="mb-3 font-light text-gray-600">
                                "Salah satu project divisi marcomm kami adalah men-supply showroom kendaraan bermotor rekanan kami dengan tenda piramid berbagai ukuran untuk ditempatkan di depan showroom sebagai media bantu promosi."
                            </p>
                            <div className="text-xl font-semibold text-gray-800">Joko Widodo</div>
                            <div className="italic font-light text-gray-500">Perusahaan Leasing Otomotif</div>
                        </div>
                        <div className="p-5 bg-white rounded-md shadow-md w-[30rem]">
                            <div className="flex items-center justify-center w-full mb-3 space-x-2">
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                <span className="text-xl text-yellow-400 bi-star-half"></span>
                            </div>
                            <p className="mb-3 font-light text-gray-600">
                                "Salah satu project divisi marcomm kami adalah men-supply showroom kendaraan bermotor rekanan kami dengan tenda piramid berbagai ukuran untuk ditempatkan di depan showroom sebagai media bantu promosi."
                            </p>
                            <div className="text-xl font-semibold text-gray-800">Joko Widodo</div>
                            <div className="italic font-light text-gray-500">Perusahaan Leasing Otomotif</div>
                        </div>
                    </div>
                </section>
            </Guest>
        </>

    );
}
