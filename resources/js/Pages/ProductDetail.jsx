import PrimaryButton from "@/Components/PrimaryButton";
import SecondButton from "@/Components/SecondButton";
import TextInput from "@/Components/TextInput";
import Guest from "@/Layouts/GuestLayout";
import BreadCrumb from "@/Parts/Breadcrumb";
import CardProduct from "@/Parts/CardProduct";
import Header from "@/Parts/Header";
import { Head, Link } from "@inertiajs/react";

export default function ProductDetail({product='tenda-sarnafil'}) {
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
            label:product,
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
                    <div className="flex gap-6 mb-10">
                        <div className="w-1/2">
                        <img src="/asset/dummy/image-product.png" alt="" className="object-cover w-full rounded-lg shadow-md max-h-[500px] mb-3"/>
                        <div className="grid grid-cols-3 gap-3">
                            <button className="overflow-hidden rounded-lg shadow-md group">
                                <img src="/asset/dummy/image-product.png" className="object-cover w-full transition-all duration-300 ease-in-out max-h-32 group-hover:scale-110" alt=""/>
                            </button>
                            <button className="overflow-hidden rounded-lg shadow-md group">
                                <img src="/asset/dummy/image-product.png" className="object-cover w-full transition-all duration-300 ease-in-out max-h-32 group-hover:scale-110" alt=""/>
                            </button>
                            <button className="overflow-hidden rounded-lg shadow-md group">
                                <img src="/asset/dummy/image-product.png" className="object-cover w-full transition-all duration-300 ease-in-out max-h-32 group-hover:scale-110" alt=""/>
                            </button>
                        </div>
                        </div>          
                        <div className="w-1/2">
                            <h2 className="mb-1 text-4xl font-semibold text-gray-800">Tenda Sarnafil</h2>
                            <div className="px-2 mb-6 text-sm text-white bg-emerald-400 w-fit">Pleton</div>
                            <p className="mb-6 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ut cupiditate ab asperiores, deleniti soluta repellendus? Recusandae aperiam sed amet, cum eos, molestias dignissimos saepe hic cupiditate dicta fugit laboriosam.</p>
                            <div className="text-sm font-semibold text-red-600 line-through">Rp. 9,500,000</div>
                            <h2 className="mb-10 text-4xl font-semibold text-blue-600">Rp 8,500,000,-</h2>
                            <PrimaryButton href={route('productDetail','sernafil-event')} className="w-full px-10 py-3 text-sm hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 hover:text-white focus:text-white active:text-white">PESAN SEKARANG</PrimaryButton>
                        </div>          

                    </div>
                    <div className="w-full">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold">Produk Terkait</h3>
                            <Link href="" className="text-blue-500">Semua Produk</Link>
                        </div>
                        <div className="flex justify-around w-full gap-6">
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                            <CardProduct/>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    )
}