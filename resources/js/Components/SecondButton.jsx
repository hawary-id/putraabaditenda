import { Link } from "@inertiajs/react";

export default function SecondButton({ href,className = '', disabled, children, ...props }) {
    if(href){
        return (
            <Link
                href={href}
                {...props}
                className={
                    `text-center w-full shadow-md items-center inline-flex justify-center py-2 bg-white text-blue-600 border border-blue-600 rounded-md font-semibold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                        disabled && 'opacity-25'
                    } ` + className
                }
                disabled={disabled}
            >
                {children}
            </Link>
        );
    }else{
        return (
            <button
                {...props}
                className={
                    `text-center shadow-md items-center px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-md font-semibold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                        disabled && 'opacity-25'
                    } ` + className
                }
                disabled={disabled}
            >
                {children}
            </button>
        );
    }
}
