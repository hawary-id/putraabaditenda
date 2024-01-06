import PrimaryButton from "@/Components/PrimaryButton";
import Title from "@/Components/Title";
import Guest from "@/Layouts/GuestLayout";
import BreadCrumb from "@/Parts/Breadcrumb";
import Header from "@/Parts/Header";
import { Head } from "@inertiajs/react";

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
    return(
        <Guest>
            <Head title="Tentang Kami" />
            <Header label="Tentang Kami" />
            <div className="pb-10 bg-gradient-to-b from-white to-gray-100">
                <BreadCrumb items={breadCrumbItem}/>
                <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2">
                    <div className="w-full">
                        <Title label="Profil Perusahaan"/>
                        <p className="mb-2 text-gray-600 indent-8"><span className="font-semibold text-blue-600">CV PUTRA ABADI TENDA</span> tidak hanya penyedia produk; kami adalah solusi singkat untuk kebutuhan Anda. Dengan bahan berkualitas tinggi, setiap pembelian dijamin investasi dalam kehandalan jangka panjang. Koleksi produk beragam kami dirancang untuk memenuhi segala keperluan, dari acara outdoor gaya hingga petualangan alam yang menantang.</p>
                        <p className="mb-5 text-gray-600 indent-8">Komitmen kami tidak hanya pada nilai harga, tetapi juga dalam setiap detail produk yang kami tawarkan. Dengan harga bersaing, setiap pelanggan mendapatkan kombinasi sempurna antara kehandalan, gaya tak tertandingi, dan nilai yang melebihi harapan. Di <span className="font-semibold text-blue-600">CV PUTRA ABADI TENDA</span>, kami tidak hanya menyediakan produk; kami ciptakan pengalaman yang memenuhi dan melampaui ekspektasi Anda.</p>
                        <PrimaryButton>Hubungi Sekarang</PrimaryButton>
                    </div>
                    <iframe className="w-full h-96" src="https://www.youtube.com/embed/78Y0SxVVxP4?si=A43m2VPbHJI4sjlT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <div className="container gap-6 py-10 mx-auto">
                    <Title label="Visi dan Misi"/>
                    <div className="flex items-center gap-24 md:grid-cols-2">
                        <div className="w-3/4">
                            <div className="w-full p-6 mx-auto mb-10 bg-white border rounded-lg shadow-md">
                                <h2 className="mb-2 text-2xl font-semibold">Visi</h2>
                                <p className="mb-6 text-gray-700">
                                    Menjadi solusi utama dan mitra terpercaya dalam memenuhi kebutuhan luar ruangan dengan menyediakan produk berkualitas tinggi dan pengalaman pelanggan yang luar biasa.
                                </p>
                            </div>
                            <div className="w-full p-6 mx-auto bg-white border rounded-lg shadow-md">
                                <h2 className="mb-2 text-2xl font-semibold">Misi</h2>
                                <ul className="pl-6 text-gray-700 list-disc">
                                    <li className="mb-2">Menyediakan produk berkualitas tinggi dengan bahan terbaik, menjadikan setiap pembelian investasi yang memberikan kehandalan jangka panjang.</li>
                                    <li className="mb-2">Merancang koleksi produk beragam yang tidak hanya stylish untuk acara luar ruangan, tetapi juga tangguh untuk petualangan alam yang menantang.</li>
                                    <li className="mb-2">Menyematkan komitmen pada nilai, tidak hanya terlihat dari segi harga, melainkan juga dalam setiap detail produk.</li>
                                    <li className="mb-2">Menciptakan pengalaman pelanggan yang luar biasa, memenuhi dan melampaui harapan setiap individu yang mempercayakan kebutuhan luar ruangan mereka kepada kami di CV PUTRA ABADI TENDA.</li>
                                </ul>
                            </div>
                        </div>
                        <img src="/asset/visi-dan-misi-putra-abadi-tenda.jpg" alt="" className="w-1/4"/>
                    </div>
                    
                </div>
        </Guest>
    )
}