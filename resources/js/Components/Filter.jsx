import TextInput from "./TextInput";

export default function Filter({ filterText, onFilter, onClear,className }) {
    return (
        <div className={`inline-flex items-center relative ${className}`}>
            <TextInput
                id="search"
                type="text"
                placeholder="Search..."
                aria-label="Search Input"
                value={filterText}
                onChange={onFilter}
                className="w-full text-sm text-gray-600 bg-white md:w-52 border-slate-300 placeholder:text-gray-400"
            />
            {filterText ? (
                <button onClick={onClear} className="absolute text-gray-400 hover:text-gray-800 right-3 bi-x-lg"></button>
            ):(
                <div className="absolute text-gray-400 right-3 bi-search"></div>
            )}
         </div>
    )
}
