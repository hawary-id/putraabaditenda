import SecondButton from "@/Components/SecondButton";
import { formatNumber } from "@/Utils/utils";
import { router } from "@inertiajs/react";

export default function CardCategory({data}) {
    const handleCategoryClick = (category) => {
        router.get(route('product',{category}))
    }

    return (
        <div className={`flex flex-col mb-10 overflow-hidden bg-white rounded-lg shadow-lg`}>
            <img src={`/storage/${data?.thumbnail}`} alt="" className='object-cover h-44 md:h-72'/>
            <div className="flex flex-col justify-between w-full p-3">
                <div className="">
                    <div className="text-sm font-semibold text-red-600 line-through">Rp. {formatNumber(data?.cheapest_product.discount_price)}</div>
                    <div className="mb-2 text-xl font-bold text-blue-600">Rp. {formatNumber(data?.cheapest_product.price)}</div>
                </div>
                <div className="">
                    <div className="text-lg font-bold text-gray-800">{data?.name}</div>
                    <div className="mb-4 text-sm font-light text-gray-400 truncate" dangerouslySetInnerHTML={{ __html: data?.cheapest_product.description }}/>
                </div>
                <SecondButton onClick={() => handleCategoryClick(data?.slug)} className="w-full text-xs hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 hover:text-white focus:text-white active:text-white">Selengkapnya</SecondButton>
            </div>
        </div>
    )
}