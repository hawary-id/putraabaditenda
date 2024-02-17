import PrimaryButton from '@/Components/PrimaryButton';
import SecondButton from '@/Components/SecondButton';
import Guest from '@/Layouts/GuestLayout';
import CardCategory from '@/Parts/CardCategory';
import { Head } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function Home({categories }) {
    const testimonials = [
        {
            'name': 'Abdul Aziz',
            'company': 'Perusahaan Leasing Otomotif',
            'testimony': "Putra Abadi Tenda telah menjadi mitra yang andal dalam penyediaan tenda untuk acara kami. Pelayanan cepat dan berkualitas."
        },
        {
            name: 'Budi Santoso',
            company: 'Owner Usaha Retail',
            testimony: 'Sangat puas dengan tenda yang kami beli. Tahan air dan kokoh, sangat sesuai dengan kebutuhan kami.'
        },
        {
            name: 'Dewi Lestari',
            company: 'Event Organizer Profesional',
            testimony: 'Terimakasih Putra Abadi Tenda, pilihan yang sangat tepat untuk kebutuhan tenda acara kami. Pelayanan sangat ramah dan profesional.'
        },
        {
            name: 'Iwan Setiawan',
            company: 'Kontraktor Bangunan',
            testimony: 'Produk tenda berkualitas tinggi dan awet. Layanan pelanggan yang responsif dan membantu.'
        },
        {
            name: 'Ratna Dewi',
            company: 'Usaha Kuliner',
            testimony: 'Putra Abadi Tenda memang terbaik! Harga terjangkau dan kualitas yang tidak diragukan.'
        }
    ];
    return (
        <>
            <Guest>
                <Head>
                    <title>Tenda Sarnafil, Peleton, Terpal TERMURAH dan TERBAIK di Tangerang</title>
                    <meta name="description" content="Cari tenda dan terpal termurah dengan pilihan terlengkap di Tangerang? Putra Abadi Tenda menyediakan solusi penutupan berkualitas tinggi untuk berbagai kebutuhan. Dengan koleksi terlengkap dari tenda sarnafil hingga terpal, kami menawarkan harga terjangkau tanpa mengorbankan kualitas. Dapatkan penawaran terbaik untuk acara, bisnis, dan proyek Anda. Kunjungi kami sekarang dan temukan solusi penutupan yang pas untuk Anda!" />
                </Head>
               <div className="flex flex-col md:h-screen">
                    <section className="w-full h-full bg-cover bg-[url('/asset/hiro.png')]">
                        <div className="container flex flex-col items-center justify-center h-full px-3 py-5 mx-auto text-center md:px-0 md:py-0">
                            <h1 className="mb-6 text-3xl font-bold text-white uppercase md:text-6xl">PUTRA ABADI TENDA</h1>
                            <p className="text-xl font-light text-gray-300 md:text-3xl">
                                Pusat penjualan berbagai jenis tenda dan produksi siap pakai terlengkap!
                            </p>
                            <p className="text-xl font-light text-gray-300 md:text-3xl">
                                Hadir dengan harga termurah untuk memenuhi setiap aplikasi dan
                            </p>
                            <p className="mb-6 text-xl font-light text-gray-300 md:mb-16 md:text-3xl">
                                kebutuhan Anda
                            </p>
                            <SecondButton href={route('contact')} className="block px-6 py-2 font-bold text-center text-blue-600 uppercase transition duration-150 ease-in-out rounded-md w-fit md:py-3 bg-white/90 hover:bg-white active:bg-white focus:bg-white focus:text-blue-700 hover:text-blue-700 active:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ">
                                {/* <span className='mr-2 text-2xl bi-whatsapp'></span> */}
                                <span>Hubungi Kami</span>
                            </SecondButton>
                        </div>
                    </section>
                    <section className='w-full py-6 bg-blue-500'>
                        <div className="container flex flex-wrap justify-around gap-5 px-3 mx-auto md:px-0">
                            <div className="flex flex-col items-center gap-3">
                                <img src='/asset/icon-premium.svg' className='h-10 md:h-12' alt=""/>
                                <div className="w-20 text-xs font-semibold text-center text-white uppercase md:text-base md:w-32">Kualitas Premium</div>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img src='/asset/icon-size.svg' className='h-10 md:h-12' alt=""/>
                                <div className="w-20 text-xs font-semibold text-center text-white uppercase md:text-base md:w-32">Beragam Jenis & Ukuran</div>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img src='/asset/icon-price.svg' className='h-10 md:h-12' alt=""/>
                                <div className="w-20 text-xs font-semibold text-center text-white uppercase md:text-base md:w-32">Harga Terjangkau</div>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img src='/asset/icon-design.svg' className='h-10 md:h-12' alt=""/>
                                <div className="w-20 text-xs font-semibold text-center text-white uppercase md:text-base md:w-32">Desain Tenda Inovatif</div>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <img src='/asset/icon-protect.svg' className='h-10 md:h-12' alt=""/>
                                <div className="w-20 text-xs font-semibold text-center text-white uppercase md:text-base md:w-32">Proteksi dari cuaca buruk</div>
                            </div>
                        </div>
                    </section>
               </div>
                <section className="w-full py-5 bg-gray-100 md:py-10">
                    <div className="container flex flex-col justify-between px-3 mx-auto md:flex-row md:px-0">
                        <div className="justify-center hidden w-full mb-5 md:flex md:w-3/5 md:mb-0">
                            <img src="/asset/image-about-us.png" alt="" className='h-44 md:h-80'/>
                        </div>
                        <div className="flex flex-col w-full text-center md:text-right md:w-2/5">
                            <div className="text-2xl font-semibold m:text-5xl">Kenapa Harus</div>
                            <span className='mb-3 text-2xl font-semibold text-blue-500 md:mb-5 md:text-5xl'>PUTRA ABADI TENDA?</span>
                            <p className="mb-5 text-base text-gray-600 md:text-xl"><span className='font-bold text-gray-800'>
                                PUTRA ABADI TENDA</span> adalah solusi singkat untuk kebutuhan anda. Dengan bahan berkualitas tinggi, koleksi produk yang beragam, dan harga yang bersaing, kami memastikan setiap pelanggan mendapatkan kombinasi sempurna antara kehandalan, gaya, dan nilai.
                            </p>
                            <div className="justify-center md:justify-end">
                                <PrimaryButton className="w-fit" href={route('aboutUs')}>Selengkapnya</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='container w-full py-5 mx-auto bg-white md:py-10'>
                    <h2 className="px-3 mb-6 text-2xl font-semibold text-center text-gray-800 md:text-4xl md:px-0">Temukan Berbagai Produk Tenda Terbaik Kami </h2>
                    {categories.length > 0 && (
                        <Swiper
                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                '@1.50': {
                                    slidesPerView: 5,
                                    spaceBetween: 40,
                                },
                                }}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            modules={[Pagination]}
                            className="z-0 flex w-full px-3 md:px-0"
                        >
                            {categories.map((category,i) => (
                                <SwiperSlide key={category.id}>
                                    <CardCategory data={category}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    <div className="flex justify-center w-full">
                        <PrimaryButton href={route('product')} className="px-6">Semua Produk</PrimaryButton>
                    </div>
                </section>
                <section className="w-full py-5 bg-gray-100 md:py-10">
                    <h2 className="mb-3 text-2xl font-semibold text-center text-gray-800 md:mb-6 md:text-4xl">Apa kata klien kami? </h2>
                    <Swiper
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        className="z-0 flex gap-5 text-center"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.name}>
                                <div className="flex flex-col items-center justify-between p-3 mx-3 mb-10 bg-white rounded-md shadow-md h-44 md:h-56 md:p-5">
                                    <div className="flex items-center justify-center w-full mb-3 space-x-2">
                                        <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                        <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                        <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                        <span className="text-xl text-yellow-400 bi-star-fill"></span>
                                        <span className="text-xl text-yellow-400 bi-star-half"></span>
                                    </div>
                                    <p className="mb-3 text-sm font-light text-gray-600 md:text-base">
                                        "{item.testimony}"
                                    </p>
                                    <div className="">
                                        <div className="text-xl font-semibold text-gray-800">{item.name}</div>
                                        <div className="text-sm italic font-light text-gray-500 md:text-base">{item.company}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </Guest>
        </>

    );
}
