import PrimaryButton from "@/Components/PrimaryButton";
import Guest from "@/Layouts/GuestLayout";
import BreadCrumb from "@/Parts/Breadcrumb";
import CardProduct from "@/Parts/CardProduct";
import Header from "@/Parts/Header";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import DOMPurify from "dompurify";
import { formatNumber } from "@/Utils/utils";

export default function ProductDetail({product,relates}) {
    const [currentImage, setCurrentImage] = useState(product.thumbnail_1);

    const handleImageChange = (newImage) => {
        setCurrentImage(newImage);
    };

    const breadCrumbItem = [
        {
            label:'Beranda',
            url:'home'
        },
        {
            label:'Produk',
            url:'product'
        },
        {
            label:product.name,
            url:'product'
        },
    ]
    const cleanedDescription = DOMPurify.sanitize(product.description);
    const phoneNumber = '6285777558494';
    const currentUrl = window.location.href;
    const message = `Halo, saya tertarik dengan ${product.name}. Bisa berikan informasi lebih lanjut? Saya juga melihat produk ini di ${currentUrl}. Terima kasih!`;
    
    const handleWhatAppClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return(
        <Guest>
            <Head>
                <title>{`${product.category.name} | ${product.name}`}</title>
                <meta name="description" content={cleanedDescription} />
            </Head>
            <Header label={product.name} />
            <div className="pb-10">
                <BreadCrumb items={breadCrumbItem}/>
                <div className="container px-3 mx-auto md:px-0">
                    <div className="flex flex-col gap-6 mb-10 md:flex-row">
                        <div className="w-full md:w-1/2">
                            <img src={`/storage/${currentImage}`} alt="" className="object-cover w-full rounded-lg shadow-md h-[250px] md:h-[500px] mb-3"/>
                            <div className="grid grid-cols-3 gap-2 md:gap-3">
                                <button className="overflow-hidden rounded-lg shadow-md group" onClick={() => handleImageChange(product.thumbnail_1)}>
                                    <img src={`/storage/${product.thumbnail_1}`} className={`object-cover w-full h-20 md:h-32 transition-all duration-300 ease-in-out ${currentImage === product.thumbnail_1 ? 'brightness-100 scale-110' : 'brightness-50 group-hover:scale-110'}`} alt={product.name}/>
                                </button>
                                <button className="overflow-hidden rounded-lg shadow-md group" onClick={() => handleImageChange(product.thumbnail_2)}>
                                    <img src={`/storage/${product.thumbnail_2}`} className={`object-cover w-full h-20 md:h-32 transition-all duration-300 ease-in-out ${currentImage === product.thumbnail_2 ? 'brightness-100 scale-110' : 'brightness-50 group-hover:scale-110'}`} alt={product.name}/>
                                </button>
                                <button className="overflow-hidden rounded-lg shadow-md group" onClick={() => handleImageChange(product.thumbnail_3)}>
                                    <img src={`/storage/${product.thumbnail_3}`} className={`object-cover w-full h-20 md:h-32 transition-all duration-300 ease-in-out ${currentImage === product.thumbnail_3 ? 'brightness-100 scale-110' : 'brightness-50 group-hover:scale-110'}`} alt={product.name}/>
                                </button>
                            </div>
                        </div>          
                        <div className="w-full md:w-1/2">
                            <h2 className="mb-1 text-2xl font-semibold text-gray-800 md:text-4xl">{product.name}</h2>
                            <div className="px-2 mb-3 text-sm text-white md:mb-6 bg-emerald-400 w-fit">{product.category.name}</div>
                            <p className="mb-3 text-gray-600 md:mb-6" dangerouslySetInnerHTML={{ __html: product.description}}/>
                            <div className="text-sm font-semibold text-red-600 line-through">Rp. {formatNumber(product.price)},-</div>
                            <h2 className="mb-5 text-2xl font-semibold text-blue-600 md:text-4xl md:mb-10">Rp {product.discount_price.toLocaleString()},-</h2>
                            <PrimaryButton onClick={() => handleWhatAppClick()} className="block w-full px-10 py-3 text-sm md:w-fit hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 hover:text-white focus:text-white active:text-white">PESAN SEKARANG</PrimaryButton>
                        </div>          

                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold">Produk Terkait</h3>
                            <Link href={route('product')} className="text-blue-500">Semua Produk</Link>
                        </div>
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
                                slidesPerView: 4,
                                spaceBetween: 30,
                                },
                                '@1.50': {
                                slidesPerView: 5,
                                spaceBetween: 30,
                                },
                            }}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Pagination]}
                            className="z-0 w-full mySwiper"
                        >
                            {relates.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <CardProduct data={item} className="mb-10"/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </Guest>
    )
}