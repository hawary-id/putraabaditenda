import SecondButton from "@/Components/SecondButton";
import { formatNumber } from "@/Utils/utils";
 
export default function CardProduct({data,className}) {
    return (
        <div className={`flex flex-col overflow-hidden bg-white rounded-lg shadow-lg ${className}`}>
            <img src={`/storage/${data.thumbnail_1}`} alt={data.name} className='object-cover w-full h-36 md:h-72'/>
            <div className="w-full p-3">
                <div className="text-sm font-semibold text-red-600 line-through">Rp. {formatNumber(data.price)}</div>
                <div className="mb-1 text-lg font-bold text-blue-600 md:mb-2 md:text-xl">Rp. {formatNumber(data.discount_price)}</div>
                <div className="text-base font-bold text-gray-800 md:text-lg">{data.name}</div>
                <div className="mb-3 text-xs font-light text-gray-400 md:text-sm md:mb-4" dangerouslySetInnerHTML={{ __html: data.description.substring(0, 40) + "..." }}></div>
                <SecondButton href={route('productDetail',data.slug)} className="w-full text-xs hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 hover:text-white focus:text-white active:text-white">Selengkapnya</SecondButton>
            </div>
        </div>
        
    )
}