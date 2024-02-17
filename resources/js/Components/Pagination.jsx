import Link from "./Link";

export default function Pagination({ links }) {
    function getClassName(active) {
        if(active) {
            return "mr-1 mb-1 px-4 py-3 bg-blue-700 text-sm leading-4 border rounded focus:border-primary focus:text-primary text-white";
        } else{
            return "mr-1 mb-1 px-4 py-3 text-gray-700 bg-gray-200 text-sm leading-4 border rounded focus:border-primary focus:bg-blue-600 hover:bg-blue-600";
        }
    }
  
    return (
        links.length > 3 && (
            <div className="mb-4">
                <div className="flex flex-wrap mt-8">
                    {links.map((link, key) => (
                        link.url === null ? (
                            <div className="px-4 py-3 mb-1 mr-1 text-sm leading-4 text-gray-500 border rounded bg-gray-50" key={key} dangerouslySetInnerHTML={{ __html: link.label }}/>
                        ):(
                            <Link className={` ${getClassName(link.active)}`} href={ link.url } key={key} dangerouslySetInnerHTML={{ __html: link.label }}/>
                        )
                    ))}
                </div>
            </div>
        )
    );
}