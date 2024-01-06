export default function Card({title,subtitle,icon,color}) {
    return (
        <div className="flex items-center justify-between w-full p-3 bg-white rounded-md shadow-md md:p-5 group">
            <div className="">
                <div className="text-sm font-light text-gray-500 md:text-base">{title}</div>
                <div className={`text-2xl md:text-4xl font-bold ${color}`}>{subtitle}</div>
            </div>
            <div className={`text-2xl md:text-4xl transition-all duration-300 ease-in-out group-hover:scale-125 ${icon} ${color}`}></div>
        </div>
    )
}