import TextInput from "@/Components/TextInput";
import Guest from "@/Layouts/GuestLayout";
import BreadCrumb from "@/Parts/Breadcrumb";
import CardProduct from "@/Parts/CardProduct";
import Header from "@/Parts/Header";
import { Head } from "@inertiajs/react";

export default function Product(second) {
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
    return(
        <Guest>
            <Head title="Produk" />
            <Header label="Produk" />
            <div className="pb-10">
                <BreadCrumb items={breadCrumbItem}/>
                <div className="container mx-auto">
                    <div className="flex justify-end w-full mb-6">
                        <div className="relative">
                            <TextInput type="text" className="w-56 px-4 text-sm text-gray-600" placeholder="Cari Produk" />
                            <span className="absolute bi-search text-gray-500 right-3 top-[8px]"></span>
                        </div>
                    </div>
                    <div className="flex w-full gap-6">
                        <ol className="sticky overflow-hidden border divide-y-2 rounded-md shadow-md w-72 h-fit top-[5rem]">
                            <li className="w-full px-4 py-2 text-white bg-blue-600 cursor-pointer">Semua Produk</li>
                            <li className="w-full px-4 py-2 text-gray-600 transition-all ease-out cursor-pointer hover:text-white hover:bg-blue-600 active:text-white active:bg-blue-600 focus:text-white focus:bg-blue-600">Sarnafil</li>
                            <li className="w-full px-4 py-2 text-gray-600 transition-all ease-out cursor-pointer hover:text-white hover:bg-blue-600 active:text-white active:bg-blue-600 focus:text-white focus:bg-blue-600">Pleton</li>
                        </ol>
                        <div className="w-full">
                            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
                                <CardProduct/>
                                <CardProduct/>
                                <CardProduct/>
                                <CardProduct/>
                                <CardProduct/>
                                <CardProduct/>
                                <CardProduct/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}