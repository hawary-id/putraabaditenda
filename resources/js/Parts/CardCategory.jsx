import SecondButton from "@/Components/SecondButton";

export default function CardCategory(second) {
    return (
        <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg w-60">
            <img src="/asset/dummy/image-product.png" alt="" className='object-cover h-72'/>
            <div className="w-full p-5">
                <div className="text-sm font-semibold text-red-600 line-through">Rp. 9,500,000</div>
                <div className="mb-2 text-xl font-bold text-blue-600">Rp. 8,000,000</div>
                <div className="text-lg font-bold text-gray-800">Tenda Sarnafil</div>
                <div className="mb-4 text-sm font-light text-gray-400">Tersedia berbagai ukuran, mulai dari 3X3, 4X4, 6X6 m</div>
                <SecondButton className="w-full text-xs hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-700 hover:text-white focus:text-white active:text-white">Pesan Sekarang</SecondButton>
            </div>
        </div>
    )
}