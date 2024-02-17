import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import Guest from "@/Layouts/GuestLayout";
import BreadCrumb from "@/Parts/Breadcrumb";
import CardProduct from "@/Parts/CardProduct";
import Header from "@/Parts/Header";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function Product({categories,products,slug,text}) {
    const [category, setCategory] = useState(slug);
    const [search, setSearch] = useState(text);
    const breadCrumbItem = [
        {
            label:'Beranda',
            url:'home'
        },
        {
            label:'Produk',
            url:'product'
        },
    ]

    const handleCategoryChange = (category) => {
        setCategory(category)
        router.get(route('product',{category}))
    }

    const submit = (e) => {
        e.preventDefault();
        router.get(route('product',{category,search}))
    }
    return(
        <Guest>
            <Head>
                <title>Produk | Tenda Sarnafil, Peleton, Promosi, Cafe, Rumah, Membran dan Terpal TERMURAH dan TERBAIK di Tangerang</title>
                <meta name="description" content="Temukan koleksi produk tenda dan terpal berkualitas tinggi di CV Putra Abadi Tenda. Dari tenda sarnafil, peleton, promosi, cafe, rumah, membran hingga terpal untuk berbagai keperluan, kami menawarkan solusi penutupan yang handal dengan harga bersaing. Jelajahi pilihan produk kami sekarang dan temukan yang sesuai dengan kebutuhan acara, bisnis, atau proyek Anda. Dapatkan kualitas terbaik dengan layanan yang dapat diandalkan dari CV Putra Abadi Tenda." />
            </Head>
            <Header label="Produk" />
            <div className="pb-10 ">
                <BreadCrumb items={breadCrumbItem}/>
                <div className="container mx-auto">
                    <div className="sticky px-3 pt-4 pb-2 mb-4 bg-white shadow-md md:px-0 md:static md:pt-0 md:pb-0 md:mb-6 top-12 md:shadow-none">
                        <div className="flex justify-end w-full mb-3">
                            <form onSubmit={submit} className="relative w-full md:w-fit">
                                <TextInput type="text" value={search || ''} className="block w-full px-4 text-sm text-gray-600 md:w-56" placeholder="Cari Produk" onChange={(e) => setSearch(e.target.value)} />
                                <span className="absolute bi-search text-gray-500 right-3 top-[8px]"></span>
                            </form>
                        </div>
                        <div className="flex gap-3 overflow-x-auto md:hidden">
                            <div className={`w-full whitespace-nowrap px-3 text-sm py-1 text-gray-600 transition-all ease-out cursor-pointer ${category === '' ? 'text-white bg-blue-600' : 'hover:text-white hover:bg-blue-600 active:text-white active:bg-blue-600 focus:text-white focus:bg-blue-600'}`} onClick={() => router.get(route('product'))}>Semua Produk</div>
                            {categories.map((item)=> (
                                <div key={item.id} onClick={() => handleCategoryChange(item.slug)} className={`w-full whitespace-nowrap px-3 text-sm py-1 text-gray-600 transition-all ease-out cursor-pointer ${category === item.slug ? 'text-white bg-blue-600' : 'hover:text-white hover:bg-blue-600 active:text-white active:bg-blue-600 focus:text-white focus:bg-blue-600'}`}>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-6 px-3 md:flex-row md:px-0">
                        <ol className="hidden md:block sticky bg-white overflow-hidden border divide-y-2 rounded-md shadow-md w-full md:w-72 h-fit top-16 md:top-[5rem]">
                            <li className={`w-full px-4 py-2 text-gray-600 transition-all ease-out cursor-pointer ${category === '' ? 'text-white bg-blue-600' : 'hover:text-white hover:bg-blue-600 active:text-white active:bg-blue-600 focus:text-white focus:bg-blue-600'}`} onClick={() => router.get(route('product'))}>Semua Produk</li>
                            {categories.map((item)=> (
                                <li key={item.id} onClick={() => handleCategoryChange(item.slug)} className={`w-full px-4 py-2 text-gray-600 transition-all ease-out cursor-pointer ${category === item.slug ? 'text-white bg-blue-600' : 'hover:text-white hover:bg-blue-600 active:text-white active:bg-blue-600 focus:text-white focus:bg-blue-600'}`}>
                                    {item.name}
                                </li>
                            ))}
                        </ol>
                        
                        {products.data.length > 0 ? (
                            <div className="w-full">
                                <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
                                {products.data.map((item) => (
                                        <CardProduct data={item} key={item.id}/>
                                ))}
                                </div>
                                <Pagination class="mt-6" links={products.links} />
                            </div>
                        ):(
                            <div className="w-full py-2 text-center rounded text-gray-50 bg-rose-300 h-fit">Produk tidak ditemukan</div>
                        )}
                    </div>
                </div>
            </div>
        </Guest>
    )
}